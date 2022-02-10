import FluorineClient from '@classes/Client';
import Embed from '@classes/Embed';
import { CommandInteraction } from 'discord.js';
import r from 'rethinkdb';
export async function run(client: FluorineClient, interaction: CommandInteraction) {
    if (!interaction.memberPermissions.has('MANAGE_GUILD')) {
        return interaction.reply({
            content: client.i18n.t('CONFIG_FAIL', { lng: interaction.locale }),
            ephemeral: true
        });
    }
    const value = interaction.options.getInteger('factor');
    const guildId = interaction.guild.id;
    const embed = new Embed(client, interaction.locale)
        .setLocaleTitle('CONFIG_SET_SUCCESS_TITLE')
        .setLocaleDescription('CONFIG_SET_SUCCESS_DESCRIPTION', {
            key: client.i18n.t('CONFIG_ANTIBOT', { lng: interaction.locale }),
            value
        });
    interaction.reply({ embeds: [embed] });
    r.table('config').get(guildId).update({ antibot: value }).run(client.conn);
}
