import test from 'ava';
import capitalizeWord from './index.es5';

const origin = 'A Sentence Can Include Words Grouped Meaningfully To Express A Statement, Question, Exclamation, Request, Command Or Suggestion. С Точки Зрения Пунктуации, Предложение Как Законченная Единица Речи Оформляется В Конце Точкой, Восклицательным Или Вопросительным Знаками — Или Многоточием.';

const lower = 'a sentence can include words grouped meaningfully to express a statement, question, exclamation, request, command or suggestion. С точки зрения пунктуации, предложение как законченная единица речи оформляется в конце точкой, восклицательным или вопросительным знаками — или многоточием.';

test('should capitalize each word', t => {
  t.is(capitalizeWord(origin), origin);
  t.is(capitalizeWord(lower), origin);
});
