var descs = {
  "18d6c72a0cc4": "daniel?",
  "18d6c7453ec4": "möllan.lulle",
  "18a6f7f04a06": "möllan.moa",
  "8416f92daa22": "erik1",
  "18d6c72a0efe": "erik2",
  "8416f9e45668": "erik3",
  "8416f9aef416": "fredr",
  "8416f92db762": "fredr.torg",
  "18d6c72a0bc0": "fredr.fisk",
  "18d6c72a0eb6": "fredr.stat",
  "8416f92db8da": "haweli?",
  "18a6f7f04eae": "kalle",
  "18d6c72a100a": "claesg.sofiel", // mot fiskart
  "c025e9a84c8a": "fisk.cykel",
  "c025e999e6e4": "fisk.istanb?",
  "18d6c72a0ecc": "martin.nets",
  "18d6c72a0a04": "martin.chok",
  "18d6c72a0196": "martin.akut",
  "18d6c72a1008": "kami",
  "8416f92a6f18": "söfö.danne",
  "18d6c72a08e0": "söfö.justnu", // ? black ink tattoo?
  "18d6c74551f8": "söfö.lgh1201",
  "18d6c729ff48": "triang.gabi1",
  "18d6c7453e5c": "triang.gabi2",
  "8416f9ae6650": "triang.håkan",
  "18a6f7f046c2": "pontus",
  "2e6f312f66f0": "ink on skin tattoo",
  "1627ed37c610": "justnu",
  "72b235760530": "daniel",
  "2262d1f72478": "triangelns tobak",
  "b26d326008b0": "kökskompaniet",
  "66126cc0acf8": "mio",
  "8a750390e2e8": "silwer tobak",
  "a6d7b1efb918": "pontus gågatan",
  "baea17088eb0": "pontus systemet?",
  "0e6e136470f8": "salong gorgeous"
 };

function getnodedesc(nodeid) {
  if (!nodeid || !descs.hasOwnProperty(nodeid)) return "";
  return descs[nodeid];
}
