let selector = document.getElementById('selector');
selector.checked = JSON.parse(localStorage.getItem('checked'))
document.body.style.backgroundColor = isChecked(selector)

selector.addEventListener('change', () => {
    document.body.style.backgroundColor = isChecked(selector)
    localStorage.setItem("checked", selector.checked);
});

function isChecked(selector) {
    if(selector.checked)  return 'var(--dark)';
    else return 'var(--light)';
}