import {
    ActionRowBuilder,
    ModalBuilder as UnlocalizedBuilder,
    type LocalizationMap,
    type TextInputBuilder as DjsTextInputBuilder
} from 'discord.js';
import { BaseComponent } from '#builderBases';
import type { TextInputBuilder } from '#components';

export class ModalBuilder extends BaseComponent<UnlocalizedBuilder> {
    public locale: keyof LocalizationMap;

    constructor(locale: keyof LocalizationMap, customId: string) {
        super();
        this.locale = locale;
        this.builder = new UnlocalizedBuilder().setCustomId(customId);
    }

    setTitle(title: string) {
        this.builder.setTitle(this.getOne(title, this.locale));
        return this;
    }

    addComponents(...components: TextInputBuilder[]) {
        this.builder.addComponents(
            ...components.map(builder =>
                new ActionRowBuilder<DjsTextInputBuilder>().addComponents(builder.prepare(this.locale).builder)
            )
        );

        return this;
    }

    setComponents(...components: TextInputBuilder[]) {
        this.builder.setComponents(
            ...components.map(builder =>
                new ActionRowBuilder<DjsTextInputBuilder>().addComponents(builder.prepare(this.locale).builder)
            )
        );

        return this.builder;
    }
}
