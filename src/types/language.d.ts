export type Languages = 'pl' | 'en-US';

export interface LanguageType {
    '8BALL_RESPONSES': string[];
    '8BALL_RESPONSE': string;
    '8BALL_ERROR': string;
    AVATAR: string;
    BAN_PERMISSIONS_MISSING: string;
    BAN_BOT_PERMISSIONS_MISSING: string;
    BAN_ARGUMENTS_MISSING: string;
    BAN_MEMBER_MISSING: string;
    BAN_ERROR_YOURSELF: string;
    BAN_SUCCESS_TITLE: string;
    BAN_SUCCESS_DESCRIPTION: string;
    BAN_MODERATOR: string;
    BAN_USER: string;
    PUNISHMENT_ID: string;
    BAN_REASON: string;
    REASON: string;
    NONE: string;
    REASON_LONGER_THAN_1024: string;
    HYPIXEL_INVALID_PLAYER: string;
    HYPIXEL_NO_ARGS: string;
    HYPIXEL_PLAYER_NOT_FOUND: string;
    HYPIXEL_STATISTICS_TITLE: string;
    HYPIXEL_WON_GAMES: string;
    HYPIXEL_LOST_GAMES: string;
    HYPIXEL_KILLS: string;
    HYPIXEL_DEATHS: string;
    HYPIXEL_BEDS_DESTROYED: string;
    HYPIXEL_BEDS_LOST: string;
    HYPIXEL_ASSISTS: string;
    BAN: string;
    KICK: string;
    WARN: string;
    MUTE: string;
    TIMEOUT: string;
    CASE_INVALID_CASE_ID: string;
    CASE_NOT_FOUND: string;
    CASE_TITLE: string;
    CASE_NEW: string;
    CASE_USER: string;
    CASE_MODERATOR: string;
    CASE_TYPE: string;
    CASE_REASON: string;
    FUN: string;
    HELP_TITLE_FUN: string;
    TOOLS: string;
    HELP_TITLE_TOOLS: string;
    MODERATION: string;
    HELP_TITLE_MODERATION: string;
    KICK_PERMISSIONS_MISSING: string;
    KICK_BOT_PERMISSIONS_MISSING: string;
    KICK_ARGUMENTS_MISSING: string;
    KICK_MEMBER_MISSING: string;
    KICK_ERROR_YOURSELF: string;
    KICK_SUCCESS_TITLE: string;
    KICK_SUCCESS_DESCRIPTION: string;
    KICK_MODERATOR: string;
    KICK_USER: string;
    KICK_REASON: string;
    LISTCASE_TITLE: string;
    LISTCASE_FOOTER: string;
    LISTCASE_NO_CASES: string;
    LISTCASE_MEMBER_MISSING: string;
    LISTCASE_BACK: string;
    LISTCASE_NEXT: string;
    MUTE_BOT_PERMISSIONS_MISSING: string;
    MUTE_PERMISSIONS_MISSING: string;
    MUTE_MEMBER_MISSING: string;
    MUTE_SUCCESS_TITLE: string;
    MUTE_SUCCESS_DESCRIPTION: string;
    MUTE_MODERATOR: string;
    MUTE_USER: string;
    MUTE_REASON: string;
    PING: string;
    SERVER_INFO: string;
    SERVER_INFO_NAME: string;
    SERVER_INFO_DESCRIPTION: string;
    SERVER_INFO_MEMBERS: string;
    SERVER_INFO_CHANNELS: string;
    SERVER_INFO_CREATED: string;
    SERVER_INFO_OWNER: string;
    SERVER_INFO_ROLES: string;
    SERVER_INFO_REGION: string;
    STATS_TITLE: string;
    STATS_MEMORY_USAGE: string;
    STATS_USER_COUNT: string;
    STATS_SERVER_COUNT: string;
    STATS_CHANNELS_COUNT: string;
    STATS_COMMAND_COUNT: string;
    STATS_UPTIME: string;
    UNMUTE_BOT_PERMISSIONS_MISSING: string;
    UNMUTE_PERMISSIONS_MISSING: string;
    UNMUTE_MEMBER_MISSING: string;
    UNMUTE_SUCCESS_TITLE: string;
    UNMUTE_SUCCESS_DESCRIPTION: string;
    UNMUTE_MODERATOR: string;
    UNMUTE_USER: string;
    UNMUTE_REASON: string;
    WARN_PERMISSIONS_MISSING: string;
    WARN_ARGUMENTS_MISSING: string;
    WARN_MEMBER_MISSING: string;
    WARN_ERROR_YOURSELF: string;
    WARN_SUCCESS_TITLE: string;
    WARN_SUCCESS_DESCRIPTION: string;
    WARN_MODERATOR: string;
    WARN_USER: string;
    WARN_REASON: string;
    MESSAGE_DELETE_TITLE: string;
    MESSAGE_DELETE_AUTHOR: string;
    MESSAGE_DELETE_CONTENT: string;
    MESSAGE_UPDATE_TITLE: string;
    MESSAGE_UPDATE_AUTHOR: string;
    MESSAGE_UPDATE_NEW_CONTENT: string;
    MESSAGE_UPDATE_OLD_CONTENT: string;
    MESSAGE_CREATE_COOLDOWN_TITLE: string;
    MESSAGE_CREATE_COOLDOWN_DESCRIPTION: string;
    MESSAGE_CREATE_DESCRIPTION: string;
    MESSAGE_CREATE_DM: string;
    COMPONENT_PRIVATE: string;
    HOWGAY: string;
    HOWGAY_ARGS: string;
    AI_TITLE: string;
    AI_DESCRIPTION: string;
    AI_ERROR: string;
    AI_LIMIT: string;
    AI_ARGS: string;
    AI_WAIT: string;
    PROFILE_DESCRIPTION: string;
    PROFILE_WEBSITE: string;
    PROFILE_BIRTHDAY: string;
    PROFILE_LOCATION: string;
    PROFILE_SET_DESCRIPTION: string;
    PROFILE_DESCRIPTION_LENGTH: string;
    PROFILE_INVALID_WEBSITE: string;
    PROFILE_SET_WEBSITE: string;
    PROFILE_NOT_SET: string;
    PROFILE_NOT_SET_DESCRIPTION: string;
    PROFILE_INVALID_BIRTHDAY: string;
    PROFILE_SET_BIRTHDAY: string;
    PROFILE_SUCCESS: string;
    PROFILE_SET_LOCATION: string;
    PROFILE_SET_PRONOUNS: string;
    PROFILE_INVALID_PRONOUNS: string;
    PROFILE_INVALID_LOCATION: string;
    PROFILE_INVALID_OPTION: string;
    MONTHS: string[];
    ANTIBOT_REASON: string;
    BIRB: string;
    DOG: string;
    CAT: string;
    INPOST_ARGS: string;
    INPOST_URL: string;
    INPOST_NOT_FOUND: string;
    INPOST_TITLE: string;
    INPOST_DESCRIPTION: string;
    DURATION: string;
    TIMEOUT_PERMISSIONS_MISSING: string;
    TIMEOUT_BOT_PERMISSIONS_MISSING: string;
    TIMEOUT_MEMBER_MISSING: string;
    TIMEOUT_ERROR_YOURSELF: string;
    TIMEOUT_DURATION_INVALID: string;
    TIMEOUT_SUCCESS_TITLE: string;
    TIMEOUT_SUCCESS_DESCRIPTION: string;
    TIMEOUT_MODERATOR: string;
    TIMEOUT_USER: string;
    TIMEOUT_REASON: string;
    TAG_DOESNT_EXIST: string;
    TAGS_CREATE_FLUORINE_OVERRIDE: string;
    TAGS_CREATE_EXISTING: string;
    TAGS_CREATE_SUCCESS: string;
}

export type LanguageStrings = keyof LanguageType;
