export function getFiveMinutesRowFromTimestamp(timestamp) {
  const minutes = timestamp.getMinutes();
  const onLamps = Math.floor(minutes / 5);
  let row = "";

  for (let i = 1; i <= onLamps; i++) {
    if (i % 3 === 0) {
      row += "R"; // Les lampes rouges pour les quarts d'heure
    } else {
      row += "Y"; // Les lampes jaunes pour les autres blocs de 5 minutes
    }
  }

  return row.padEnd(11, "O"); // Compléter avec des lampes éteintes
}
