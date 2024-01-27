function capitalizeFirst(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function formatName(name) {
  const newName = capitalizeFirst(name);
  // account for edge cases
  if (newName === 'Nidoran-m') return 'Nidoran ♂';
  if (newName === 'Nidoran-f') return 'Nidoran ♀';
  if (newName === 'Mr-mime') return 'Mr. Mime';
  return newName;
}

export { capitalizeFirst, formatName };
