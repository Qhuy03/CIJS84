var textarea = document.getElementById('myTextarea');
var wordCount = document.getElementById('wordCount');
var timeoutId;

textarea.addEventListener('input', function() {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(updateWordCount, 500);
});

function updateWordCount() {
  var text = textarea.value;
  var words = text.trim().split(/\s+/);
  var wordCountValue = words.length;

  wordCount.textContent = 'Số từ: ' + wordCountValue;
}
