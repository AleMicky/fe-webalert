export enum NotificationChannelType {
    EMAIL = 'EMAIL',
    WHATSAPP = 'WHATSAPP',
    TELEGRAM = 'TELEGRAM',
    TEAMS = 'TEAMS',
}

export interface NotificationChannel {
    id: string;
    code: string;
    name: string;
    type: NotificationChannelType;
    webhookUrl: string;
    description?: string;
    active: boolean;
}