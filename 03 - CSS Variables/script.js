const inputs = Array.from(document.querySelectorAll('.controls input'));

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.map(i => i.addEventListener('change', handleUpdate));
inputs.map(i => i.addEventListener('mousemove', handleUpdate));