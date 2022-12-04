import type { FluorineClient } from '#classes';
import { getCommandMention } from '#util';
import {
    type ChatInputCommandInteraction,
    PermissionFlagsBits,
    SlashCommandSubcommandBuilder,
    type AutocompleteInteraction
} from 'discord.js';

export async function onSlashCommand(client: FluorineClient, interaction: ChatInputCommandInteraction) {
    const name = interaction.options.getString('name');
    const itemObj = await client.shop.get(interaction.guildId, name);

    if (!itemObj) {
        await client.application.commands.fetch();
        return interaction.reply({
            content: client.i18n.t('SHOP_DELETE_NOT_FOUND', {
                shopList: await getCommandMention(client, 'shop list'),
                lng: interaction.locale
            }),
            ephemeral: true
        });
    }

    if (!interaction.memberPermissions.has(PermissionFlagsBits.ManageGuild)) {
        return interaction.reply({
            content: client.i18n.t('SHOP_DELETE_PERMISSIONS', {
                lng: interaction.locale
            }),
            ephemeral: true
        });
    }

    interaction.reply(client.i18n.t('SHOP_DELETE_SUCCESS', { lng: interaction.locale, item: name }));
    client.shop.delete(interaction.guildId, name);
}

export async function onAutocomplete(
    client: FluorineClient,
    interaction: AutocompleteInteraction,
    focusedName: string,
    focusedValue: string
) {
    if (focusedName === 'name') {
        const items = await client.prisma.shopItem.findMany({
            where: {
                guildId: BigInt(interaction.guildId),
                name: { contains: focusedValue }
            },
            select: { name: true },
            take: 25,
            orderBy: {
                name: 'asc'
            }
        });

        const predicted = items.map(item => ({ name: item.name, value: item.name }));
        interaction.respond(predicted);
    }
}

export const slashCommandData = new SlashCommandSubcommandBuilder()
    .setName('delete')
    .setNameLocalizations({ pl: 'usuń' })
    .setDescription('Delete a item from the shop')
    .setDescriptionLocalizations({ pl: 'Usuń przedmiot ze sklepu' })
    .addStringOption(option =>
        option
            .setName('name')
            .setNameLocalizations({ pl: 'nazwa' })
            .setDescription('Name of the item')
            .setDescriptionLocalizations({ pl: 'Nazwa przedmiotu' })
            .setRequired(true)
            .setAutocomplete(true)
    );
