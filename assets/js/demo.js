/* نسخهٔ نمایشی پنل — فقط جابه‌جایی بین صفحات داخل همین یک فایل HTML (بدون سرور واقعی) */
(function () {
  'use strict';

  function showView(name) {
    document.querySelectorAll('.view').forEach(function (v) { v.classList.remove('on'); });
    var target = document.getElementById('view-' + name);
    if (target) target.classList.add('on');
    document.querySelectorAll('.navlink').forEach(function (a) {
      a.classList.toggle('on', a.getAttribute('data-view') === name);
    });
    window.scrollTo(0, 0);
    closeAside();
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest('[data-view]');
    if (link) {
      e.preventDefault();
      showView(link.getAttribute('data-view'));
    }
  });

  /* منوی کشویی موبایل */
  var aside = document.querySelector('[data-aside]');
  var aback = document.querySelector('[data-aback]');
  function openAside() { aside && aside.classList.add('open'); aback && aback.classList.add('open'); document.body.classList.add('noscroll'); }
  function closeAside() { aside && aside.classList.remove('open'); aback && aback.classList.remove('open'); document.body.classList.remove('noscroll'); }
  var amenu = document.querySelector('[data-amenu]');
  if (amenu) amenu.addEventListener('click', openAside);
  var aclose = document.querySelector('[data-aclose]');
  if (aclose) aclose.addEventListener('click', closeAside);
  if (aback) aback.addEventListener('click', closeAside);

  /* دکمه‌های پیش‌فرض رنگ در صفحهٔ «ظاهر و چیدمان» — فقط نمایشی، چیزی ذخیره نمی‌شود */
  document.querySelectorAll('[data-preset]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var c = btn.getAttribute('data-preset');
      document.documentElement.style.setProperty('--brand', c);
      document.documentElement.style.setProperty('--ok', c);
      var picker = document.getElementById('brandColor');
      if (picker) picker.value = c;
    });
  });
  var brandColor = document.getElementById('brandColor');
  if (brandColor) brandColor.addEventListener('input', function () {
    document.documentElement.style.setProperty('--brand', brandColor.value);
  });
})();
