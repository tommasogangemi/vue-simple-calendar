import { ICalendarItem, INormalizedCalendarItem, DateTimeFormatOption } from "./ICalendarItem";
import { IHeaderProps } from "./IHeaderProps";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    showDate?: Date | undefined;
    displayPeriodUom?: string | undefined;
    displayPeriodCount?: number | undefined;
    displayWeekNumbers?: boolean | undefined;
    locale?: string | undefined;
    monthNameFormat?: DateTimeFormatOption;
    weekdayNameFormat?: DateTimeFormatOption;
    showTimes?: boolean | undefined;
    timeFormatOptions?: object | undefined;
    disablePast?: boolean | undefined;
    disableFuture?: boolean | undefined;
    enableDateSelection?: boolean | undefined;
    selectionStart?: Date | undefined;
    selectionEnd?: Date | undefined;
    enableDragDrop?: boolean | undefined;
    startingDayOfWeek?: number | undefined;
    items?: ICalendarItem[] | undefined;
    dateClasses?: Record<string, string[]> | undefined;
    itemTop?: string | undefined;
    itemContentHeight?: string | undefined;
    itemBorderHeight?: string | undefined;
    periodChangedCallback?: Function | undefined;
    currentPeriodLabel?: string | undefined;
    currentPeriodLabelIcons?: string | undefined;
    doEmitItemMouseEvents?: boolean | undefined;
    enableHtmlTitles?: boolean | undefined;
}>, {
    showDate: undefined;
    displayPeriodUom: string;
    displayPeriodCount: number;
    displayWeekNumbers: boolean;
    locale: undefined;
    monthNameFormat: string;
    weekdayNameFormat: string;
    showTimes: boolean;
    timeFormatOptions: () => {};
    disablePast: boolean;
    disableFuture: boolean;
    enableDateSelection: boolean;
    selectionStart: undefined;
    selectionEnd: undefined;
    enableDragDrop: boolean;
    startingDayOfWeek: number;
    items: () => never[];
    dateClasses: () => {};
    itemTop: string;
    itemContentHeight: string;
    itemBorderHeight: string;
    periodChangedCallback: undefined;
    currentPeriodLabel: string;
    currentPeriodLabelIcons: string;
    doEmitItemMouseEvents: boolean;
    enableHtmlTitles: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "period-changed": () => void;
    "click-date": (day: Date, itemsInRange: INormalizedCalendarItem[], windowEvent: Event) => void;
    "click-item": (item: INormalizedCalendarItem, windowEvent: Event) => void;
    "item-mouseenter": (item: INormalizedCalendarItem, windowEvent: Event) => void;
    "item-mouseleave": (item: INormalizedCalendarItem, windowEvent: Event) => void;
    "drag-start": (item: INormalizedCalendarItem, windowEvent: Event) => void;
    "drag-over-date": (currentDragItem: INormalizedCalendarItem, day: Date, windowEvent: Event) => void;
    "drag-enter-date": (currentDragItem: INormalizedCalendarItem, day: Date, windowEvent: Event) => void;
    "drag-leave-date": (currentDragItem: INormalizedCalendarItem, day: Date, windowEvent: Event) => void;
    "drop-on-date": (currentDragItem: INormalizedCalendarItem, day: Date, windowEvent: Event) => void;
    "date-selection": (selectedDateRange: [Date, Date], windowEvent: Event) => void;
    "date-selection-start": (selectedDateRange: [Date, Date], windowEvent: Event) => void;
    "date-selection-finish": (selectedDateRange: [Date, Date], windowEvent: Event) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    showDate?: Date | undefined;
    displayPeriodUom?: string | undefined;
    displayPeriodCount?: number | undefined;
    displayWeekNumbers?: boolean | undefined;
    locale?: string | undefined;
    monthNameFormat?: DateTimeFormatOption;
    weekdayNameFormat?: DateTimeFormatOption;
    showTimes?: boolean | undefined;
    timeFormatOptions?: object | undefined;
    disablePast?: boolean | undefined;
    disableFuture?: boolean | undefined;
    enableDateSelection?: boolean | undefined;
    selectionStart?: Date | undefined;
    selectionEnd?: Date | undefined;
    enableDragDrop?: boolean | undefined;
    startingDayOfWeek?: number | undefined;
    items?: ICalendarItem[] | undefined;
    dateClasses?: Record<string, string[]> | undefined;
    itemTop?: string | undefined;
    itemContentHeight?: string | undefined;
    itemBorderHeight?: string | undefined;
    periodChangedCallback?: Function | undefined;
    currentPeriodLabel?: string | undefined;
    currentPeriodLabelIcons?: string | undefined;
    doEmitItemMouseEvents?: boolean | undefined;
    enableHtmlTitles?: boolean | undefined;
}>, {
    showDate: undefined;
    displayPeriodUom: string;
    displayPeriodCount: number;
    displayWeekNumbers: boolean;
    locale: undefined;
    monthNameFormat: string;
    weekdayNameFormat: string;
    showTimes: boolean;
    timeFormatOptions: () => {};
    disablePast: boolean;
    disableFuture: boolean;
    enableDateSelection: boolean;
    selectionStart: undefined;
    selectionEnd: undefined;
    enableDragDrop: boolean;
    startingDayOfWeek: number;
    items: () => never[];
    dateClasses: () => {};
    itemTop: string;
    itemContentHeight: string;
    itemBorderHeight: string;
    periodChangedCallback: undefined;
    currentPeriodLabel: string;
    currentPeriodLabelIcons: string;
    doEmitItemMouseEvents: boolean;
    enableHtmlTitles: boolean;
}>>> & {
    "onPeriod-changed"?: (() => any) | undefined;
    "onClick-date"?: ((day: Date, itemsInRange: INormalizedCalendarItem[], windowEvent: Event) => any) | undefined;
    "onClick-item"?: ((item: INormalizedCalendarItem, windowEvent: Event) => any) | undefined;
    "onItem-mouseenter"?: ((item: INormalizedCalendarItem, windowEvent: Event) => any) | undefined;
    "onItem-mouseleave"?: ((item: INormalizedCalendarItem, windowEvent: Event) => any) | undefined;
    "onDrag-start"?: ((item: INormalizedCalendarItem, windowEvent: Event) => any) | undefined;
    "onDrag-over-date"?: ((currentDragItem: INormalizedCalendarItem, day: Date, windowEvent: Event) => any) | undefined;
    "onDrag-enter-date"?: ((currentDragItem: INormalizedCalendarItem, day: Date, windowEvent: Event) => any) | undefined;
    "onDrag-leave-date"?: ((currentDragItem: INormalizedCalendarItem, day: Date, windowEvent: Event) => any) | undefined;
    "onDrop-on-date"?: ((currentDragItem: INormalizedCalendarItem, day: Date, windowEvent: Event) => any) | undefined;
    "onDate-selection"?: ((selectedDateRange: [Date, Date], windowEvent: Event) => any) | undefined;
    "onDate-selection-start"?: ((selectedDateRange: [Date, Date], windowEvent: Event) => any) | undefined;
    "onDate-selection-finish"?: ((selectedDateRange: [Date, Date], windowEvent: Event) => any) | undefined;
}, {
    showDate: Date;
    displayPeriodUom: string;
    displayPeriodCount: number;
    displayWeekNumbers: boolean;
    locale: string;
    monthNameFormat: "long" | "short" | "narrow";
    weekdayNameFormat: "long" | "short" | "narrow";
    showTimes: boolean;
    timeFormatOptions: object;
    disablePast: boolean;
    disableFuture: boolean;
    enableDateSelection: boolean;
    selectionStart: Date;
    selectionEnd: Date;
    enableDragDrop: boolean;
    startingDayOfWeek: number;
    items: ICalendarItem[];
    dateClasses: Record<string, string[]>;
    itemTop: string;
    itemContentHeight: string;
    itemBorderHeight: string;
    periodChangedCallback: Function;
    currentPeriodLabel: string;
    currentPeriodLabelIcons: string;
    doEmitItemMouseEvents: boolean;
    enableHtmlTitles: boolean;
}, {}>, {
    header?(_: {
        headerProps: IHeaderProps;
    }): any;
    "day-header"?(_: {
        index: string;
        label: string;
    }): any;
    "week-number"?(_: {
        date: Date;
        numberInYear: number;
        numberInPeriod: number;
    }): any;
    "day-content"?(_: {
        day: Date;
    }): any;
    item?(_: {
        value: INormalizedCalendarItem;
        weekStartDate: Date;
        top: string;
    }): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
