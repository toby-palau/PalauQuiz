import { type } from "os";

export enum  PageTypes {
    title = "title",
    narrator = "narrator",
    question = "question",
    success = "success",
}

export enum QuestionTypes {
    MCSA = "MCSA",
    MCMA = "MCMA",
    RO = "RO",
    VERB = "VERB",
    EMAIL = "EMAIL",
};

export enum DisplayLogicTypes {
    answeredCorrectly = "answeredCorrectly",
    seenBefore = "seenBefore",
}

export type SessionType = {
	pages: Array<TitlePageType | NarratorPageType | QuestionPageType | SuccessPageType>;
}

export enum FilterTypes {
    all = "all",
    current = "current",
    longTerm = "longTerm",
    nearTerm = "nearTerm"
};

export const FilterTypeLabels: {[key in FilterTypes]: string} = {
    all: "🌱 All",
    current: "🌍 Current Status",
    longTerm: "🔮 Long Term",
    nearTerm: "🕞 Near Term",
};

export type QuestionFlowType = {
	chapters: Array<ChapterType>;
};

export type ChapterType = {
    cid: string;
    tags: Array<FilterTypes>;
    chapterTitle: string;
    chapterDescription: string;
    chapterCoverImage: string;
    pages: Array<TitlePageType | NarratorPageType | QuestionPageType | SuccessPageType>;
};

export type TitlePageType = {
    pid: string;
    pageType: PageTypes.title;
    title: string;
    subtitle: string;
    backgroundImage: string;
    displayLogic?: DisplayLogicType;
};

export type NarratorPageType = {
    pid: string;
    pageType: PageTypes.narrator;
    avatarImage: string;
    avatarText: string;
    backgroundImage: string;
    displayLogic?: DisplayLogicType;
};

export type QuestionPageType = {
    pid: string;
    pageType: PageTypes.question;
    avatarImage: string;
    backgroundImage: string;
    completed: boolean;
    answeredCorrectly?: boolean;
    question: MCSAQuestionType | MCMAQuestionType | ROQuestionType | VERBQuestionType | EMAILQuestionType;
    displayLogic?: DisplayLogicType;
};

export type MCSAQuestionType = {
    questionType: QuestionTypes.MCSA;
    questionText: string;
    options: Array<{
        oid: number;
        optionText: string;
    }>;
    correctAnswer?: Array<number>;
    userAnswer?: Array<number>;
};

export type MCMAQuestionType = {
    questionType: QuestionTypes.MCMA;
    questionText: string;
    options: Array<{
        oid: number;
        optionText: string;
    }>;
    correctAnswer?: Array<number>;
    userAnswer?: Array<number>;
};

export type ROQuestionType = {
    questionType: QuestionTypes.RO;
    questionText: string;
    options: Array<{
        oid: number;
        optionText: string;
    }>;
    correctAnswer?: Array<number>;
    userAnswer?: Array<number>;
};

export type VERBQuestionType = {
    questionType: QuestionTypes.VERB;
    questionText: string;
    correctAnswer?: RegExp;
    userAnswer?: string;
};

export type SuccessPageType = {
    pid: number;
    pageType: PageTypes.success;
    avatarImage: string;
    backgroundImage: string;
    title: string;
    subtitle: string;
    displayLogic?: DisplayLogicType;
}

export type EMAILQuestionType = {
    questionType: QuestionTypes.EMAIL;
    questionText: string;
    correctAnswer?: RegExp;
    userAnswer?: string;
};

export type DisplayLogicType = {
    type: DisplayLogicTypes.answeredCorrectly;
    pid: string;
    correct: boolean;
} | {
    type: DisplayLogicTypes.seenBefore;
    localStorageIndentifier: string;
};
