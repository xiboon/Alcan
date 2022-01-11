import FluorineClient from '@classes/Client';
import Embed from '@classes/Embed';
import { ChatInputCommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export async function run(
    client: FluorineClient,
    interaction: ChatInputCommandInteraction<'cached'>
) {
    const member = interaction.options.getMember('user') ?? interaction.member;

    const embed = new Embed(client, interaction.guild.preferredLocale)
        .setLocaleTitle('AVATAR')
        .setImage(member.displayAvatarURL({ dynamic: true, size: 512 }));
    interaction.reply({ embeds: [embed] });
}

export const data = new SlashCommandBuilder()
    .setName('avatar')
    .setDescription('Show avatar of an user')
    .addUserOption(option =>
        option
            .setName('user')
            .setDescription('Select an user')
            .setRequired(false)
    );

export const help = {
    name: 'avatar',
    description: 'Pokaż avatar wybranego użytkownika',
    aliases: ['av'],
    category: 'tools'
};
