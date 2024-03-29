import { useState } from 'react';

type Results = string[];
export type CareerResponseType = {
  mClass: string;
  facilName: string;
};
export type MajorType = 'mainMajor' | 'subMajor';

const reESC = /[\\^$.*+?()[\]{}|]/g;
const reChar = /[가-힣]/;
const reJa = /[ㄱ-ㅎ]/;
const offset = 44032;

const orderOffset = [
  ['ㄱ', 44032],
  ['ㄲ', 44620],
  ['ㄴ', 45208],
  ['ㄷ', 45796],
  ['ㄸ', 46384],
  ['ㄹ', 46972],
  ['ㅁ', 47560],
  ['ㅂ', 48148],
  ['ㅃ', 48736],
  ['ㅅ', 49324],
];

const con2syl = Object.fromEntries(orderOffset);
const pattern = (ch: string) => {
  let r;
  if (reJa.test(ch)) {
    const begin = con2syl[ch] || (ch.charCodeAt(0) - 12613) * 588 + con2syl['ㅅ'];
    const end = begin + 587;
    r = `[${ch}\\u${begin.toString(16)}-\\u${end.toString(16)}]`;
  } else if (reChar.test(ch)) {
    const chCode = ch.charCodeAt(0) - offset;
    if (chCode % 28 > 0) return ch;
    const begin = Math.floor(chCode / 28) * 28 + offset;
    const end = begin + 27;
    r = `[\\u${begin.toString(16)}-\\u${end.toString(16)}]`;
  } else r = ch.replace(reESC, '\\$&');
  return `(${r})`;
};

export const useSearch = () => {
  const [searchedResults, setSearchedResults] = useState<string[]>();

  const isCharacterMatch = (query: string, target: string) => {
    const reg = new RegExp(query.split('').map(pattern).join('.*?'), 'i');
    const matches = reg.exec(target);
    return Boolean(matches);
  };

  const matchWord = (wordList: Results, query: string) => {
    if (!query) return [];
    if (!isNaN(Number(query)) && query.length < 3) return [];

    return wordList.filter((word: Results[number]) => {
      return word.includes(query) || isCharacterMatch(query, word);
    });
  };

  return {
    matchWord,
    searchedResults,
    setSearchedResults,
  };
};
