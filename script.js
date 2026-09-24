const questions = {
  en: [
    { label: 'Check today’s selling price', terms: ['price', 'cost', 'how much', 'elo'], answer: 'Start by asking at least two trusted sellers or your market group for a current price for the same product, quality and unit. Compare their answers before setting your own price. This demo does not supply live prices.' },
    { label: 'Check a buyer’s payment', terms: ['payment', 'buyer', 'transfer', 'money', 'pay'], answer: 'Open your own bank or payment app and confirm that the money has arrived before releasing goods. Never rely on a screenshot or SMS alone. Do not share your PIN or one time code.' },
    { label: 'Find a supplier', terms: ['supplier', 'restock', 'stock', 'wholesale'], answer: 'Ask a trusted member of your trade group to recommend a supplier. Confirm the supplier’s identity, product quality, full cost and delivery terms before paying.' },
    { label: 'Warn my trade group about fraud', terms: ['fraud', 'scam', 'report', 'group'], answer: 'Pause the transaction. Save relevant messages, contact your payment provider through its official channel, and warn your group without publishing private account details or accusing someone without evidence.' }
  ],
  yo: [
    { label: 'Ṣàyẹ̀wò iye ọjà òní', terms: ['price', 'cost', 'how much', 'elo', 'iye', 'ọjà', 'ata'], answer: 'Béèrè iye ọjà lọ́wọ́ àwọn oníṣòwò méjì tí o gbẹ́kẹ̀lé fún irú ọjà àti ìwọ̀n kan náà. Ṣe àfiwé ìdáhùn wọn kí o tó pinnu iye rẹ. Àpẹẹrẹ yìí kò ní iye ọjà gidi ti òní.' },
    { label: 'Ṣàyẹ̀wò owó tí oníbàárà fi ránṣẹ́', terms: ['payment', 'buyer', 'transfer', 'money', 'pay', 'owó', 'san'], answer: 'Ṣí app ilé ìfowópamọ́ tirẹ kí o sì rí i pé owó ti wọlé kí o tó fi ọjà sílẹ̀. Má ṣe gbẹ́kẹ̀lé àwòrán ìsanwó tàbí SMS nìkan. Má fi PIN rẹ fún ẹnikẹ́ni.' },
    { label: 'Wá ẹni tí ń pèsè ọjà', terms: ['supplier', 'restock', 'stock', 'wholesale', 'pèsè'], answer: 'Béèrè ìmọ̀ràn lọ́wọ́ ọmọ ẹgbẹ́ ọjà tí o gbẹ́kẹ̀lé. Ṣàyẹ̀wò ẹni náà, dídára ọjà, iye gbogbo rẹ àti bí yóò ṣe dé kí o tó sanwó.' },
    { label: 'Kìlọ̀ fún ẹgbẹ́ mi nípa ẹ̀tàn', terms: ['fraud', 'scam', 'report', 'group', 'ẹ̀tàn'], answer: 'Dá ìṣòwò náà dúró. Pa àwọn ìfiranṣẹ́ tó ṣe pàtàkì mọ́, bá ilé ìfowópamọ́ rẹ sọ̀rọ̀ ní ọ̀nà osìṣẹ́ wọn, kí o sì kìlọ̀ fún ẹgbẹ́ rẹ láì tú ìsọfúnni àdáni ká.' }
  ]
};
const list = document.querySelector('#questions');
const language = document.querySelector('#language');
const questionInput = document.querySelector('#trade-question');
const answer = document.querySelector('#answer');
const status = document.querySelector('#voice-status');
const voiceButton = document.querySelector('#voice-button');
function showAnswer(item) { answer.querySelector('p').textContent = item.answer; }
function renderQuestions() {
  list.replaceChildren();
  questions[language.value].forEach(item => {
    const button = document.createElement('button');
    button.type = 'button'; button.textContent = item.label;
    button.addEventListener('click', () => { questionInput.value = item.label; showAnswer(item); });
    list.append(button);
  });
  answer.querySelector('p').textContent = language.value === 'yo' ? 'Yan ìbéèrè kan lókè láti bẹ̀rẹ̀.' : 'Choose a question above to begin.';
  questionInput.value = '';
}
function ask() {
  const query = questionInput.value.trim().toLocaleLowerCase();
  if (!query) { status.textContent = language.value === 'yo' ? 'Jọ̀wọ́ yan tàbí kọ ìbéèrè kan.' : 'Choose or enter a question first.'; questionInput.focus(); return; }
  const matched = questions[language.value].find(item => item.terms.some(term => query.includes(term)));
  if (matched) showAnswer(matched);
  else answer.querySelector('p').textContent = language.value === 'yo'
    ? 'Mi ò tíì ní ìdáhùn tó dájú fún ìbéèrè yìí. Béèrè lọ́wọ́ Olùtọ́sọ́nà Ọjà rẹ tàbí ẹni tí o gbẹ́kẹ̀lé. Má fi owó tàbí ìsọfúnni àdáni ránṣẹ́ nítorí ìdáhùn àpẹẹrẹ yìí.'
    : 'This demo cannot verify an answer to that question yet. Ask your Digital Trade Guide or a trusted market contact. Do not send money or private information based on this demonstration.';
}
document.querySelector('#ask-button').addEventListener('click', ask);
questionInput.addEventListener('keydown', event => { if (event.key === 'Enter') ask(); });
language.addEventListener('change', renderQuestions);
const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (!Recognition) { voiceButton.disabled = true; voiceButton.title = 'Voice recognition is unavailable in this browser'; status.textContent = 'Voice input is unavailable in this browser. Tap a question or type instead.'; }
else voiceButton.addEventListener('click', () => {
  const recognition = new Recognition(); recognition.lang = language.value === 'yo' ? 'yo-NG' : 'en-NG'; recognition.interimResults = false; recognition.maxAlternatives = 1;
  status.textContent = 'Listening…'; voiceButton.disabled = true;
  recognition.onresult = event => { questionInput.value = event.results[0][0].transcript; status.textContent = 'Question captured. Check the words, then tap the arrow.'; };
  recognition.onerror = event => { status.textContent = event.error === 'not-allowed' ? 'Microphone permission was denied. You can type instead.' : 'Voice input did not work. Please type or tap a question.'; };
  recognition.onend = () => { voiceButton.disabled = false; if (status.textContent === 'Listening…') status.textContent = 'No speech detected. Try again or type.'; };
  try { recognition.start(); } catch { voiceButton.disabled = false; status.textContent = 'Could not start voice input. Please type instead.'; }
});
renderQuestions();
