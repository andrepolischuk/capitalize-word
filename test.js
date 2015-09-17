import test from 'ava';
import capitalizeWord from './index';

const origin = 'A Sentence Can Include Words Grouped Meaningfully To Express A Statement, Question, Exclamation, Request, Command Or Suggestion. С Точки Зрения Пунктуации, Предложение Как Законченная Единица Речи Оформляется В Конце Точкой, Восклицательным Или Вопросительным Знаками — Или Многоточием.';

const lower = 'a sentence can include words grouped meaningfully to express a statement, question, exclamation, request, command or suggestion. С точки зрения пунктуации, предложение как законченная единица речи оформляется в конце точкой, восклицательным или вопросительным знаками — или многоточием.';

const upper = 'A SENTENCE CAN INCLUDE WORDS GROUPED MEANINGFULLY TO EXPRESS A STATEMENT, QUESTION, EXCLAMATION, REQUEST, COMMAND OR SUGGESTION. С ТОЧКИ ЗРЕНИЯ ПУНКТУАЦИИ, ПРЕДЛОЖЕНИЕ КАК ЗАКОНЧЕННАЯ ЕДИНИЦА РЕЧИ ОФОРМЛЯЕТСЯ В КОНЦЕ ТОЧКОЙ, ВОСКЛИЦАТЕЛЬНЫМ ИЛИ ВОПРОСИТЕЛЬНЫМ ЗНАКАМИ — ИЛИ МНОГОТОЧИЕМ.';

const mixed = 'a senTENCE Can include words grouPED MEAningfully to expreSS A Statement, questiON, EXCLamation, reQuest, command or suggesTION. С тоЧКИ ЗРения пунктуаЦии, ПРЕдложениЕ как законченная единицА РЕЧи офорМЛЯЕТСЯ В КОНЦЕ ТОЧКОЙ, ВОСКЛИЦАТельным иЛи вопросительнЫМ ЗНАКами — или многоточием.';

test('should capitalize each word', t => {
  t.plan(4);
  t.true(capitalizeWord(origin) === origin);
  t.true(capitalizeWord(lower) === origin);
  t.true(capitalizeWord(upper) === origin);
  t.true(capitalizeWord(mixed) === origin);
});
