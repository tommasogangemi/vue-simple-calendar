interface ICalendarItem {
    id: string;
    startDate: Date;
    title: string;
    tooltip?: string;
    endDate?: Date;
    url?: string;
    classes?: string[] | null;
    style?: string;
    meta?: {
        [Key: string]: any;
    };
}
interface INormalizedCalendarItem extends ICalendarItem {
    endDate: Date;
    originalItem: ICalendarItem;
    classes: string[];
    itemRow?: number;
}
type DateTimeFormatOption = "long" | "short" | "narrow" | undefined;
export { ICalendarItem, INormalizedCalendarItem, DateTimeFormatOption };
