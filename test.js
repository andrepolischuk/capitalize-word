import test from 'ava';
import capitalize from './index';

const origin = `
  A Sentence Can Include Words Grouped Meaningfully To Express A Statement,
  Question, Exclamation, Request, Command Or Suggestion. С Точки Зрения
  Пунктуации, Предложение Как Законченная Единица Речи Оформляется В Конце
  Точкой, Восклицательным Или Вопросительным Знаками — Или Многоточием.
`.trim();

const lower = `
  a sentence can include words grouped meaningfully to express a statement,
  question, exclamation, request, command or suggestion. С точки зрения
  пунктуации, предложение как законченная единица речи оформляется в конце
  точкой, восклицательным или вопросительным знаками — или многоточием.
`.trim();

test(t => {
  t.is(capitalize(origin), origin);
  t.is(capitalize(lower), origin);
});
