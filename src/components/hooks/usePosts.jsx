import {useMemo} from "react";

export const useSortedLanguages = (languages, sort) => {

    return useMemo(() => {
        if (sort) {
            return [...languages].sort((a, b) => a[sort].localeCompare(b[sort]))
        } else {
            return languages
        }
    }, [sort, languages]);
}

export const useLanguages = (languages, sort, query) => {
    const sortedLanguages = useSortedLanguages(languages, sort)
    return useMemo(() => {
        return sortedLanguages.filter(language => language.tittle.toLowerCase().includes(query.toLowerCase()) || language.body.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedLanguages])
}