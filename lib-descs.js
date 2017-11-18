
// These are node_ids, as found in samples/graph.json
// (samples/graph_readable.json).

// If you've observed BSSID/MAC using for example Wifianalyser, you can use
// `tools/bssid-to-nodeid` to get hold of the node_id to be used here.

var descs = {
  "18d6c72a0cc4": "daniel",
  "18d6c7453ec4": "lulle_möllan",
  "18a6f7f04a06": "moa_möllan",
  "8416f92daa22": "erik1",
  "18d6c72a0efe": "erik2",
  "8416f9e45668": "erik3",
  "8416f9aef416": "fredr",
  "8416f92db762": "fredr_torg",
  "18d6c72a0bc0": "fredr_fisk",
  "18d6c72a0eb6": "fredr_stat",
  "8416f92db8da": "haweli?",
  "18a6f7f04eae": "kalle",
  "18d6c72a100a": "claesg_sofiel", // mot fiskart
  "c025e999e6e4": "istanbul_fisk?",
  "18d6c72a0ecc": "martin",
  "18d6c72a0a04": "martin_akut",
  "18d6c72a0196": "martin_choklad",
  "18d6c72a1008": "kami",
  "8416f92a6f18": "daniel_sfg",
  "18d6c74551f8": "lgh1201_sfg",
  "18d6c729ff48": "gab1_triang",
  "18d6c7453e5c": "gabi2_triang",
  "8416f9ae6650": "håkan_triang",
  "18a6f7f046c2": "pontus_gågatan",
  "8416f92db8a0": "inkonskintattoo_sfg", //2e6f312f66f0
  "18d6c72a08e0": "justnu_sfg", //1627ed37c610
  "8416f92a6f18": "daniel?", //8416f92a6f18
  "18d6c72a0b30": "triangelnstobak_sfg", //2262d1f72478
  "c025e9a84baa": "kökskompaniet_sfg", //b26d326008b0
  "c025e99a14be": "mio_sfg", //66126cc0acf8
  "18d6c72a0db0": "silwertobak_sfg", //8a750390e2e8
  "            ": "pontus_gågatan" //a6d7b1efb918
  "            ": "salong_gorgeous" //0e6e136470f8
  "c025e9a84b32": "restsara_bergs" //9e0b3f4b48f0
  "c025e99a0e3a": "hojen_friisg" //b618c21ad800
  "c025e999e70e": "hojen_mölleg" //76069e4ed318
  "8416f92da9e6": "carlings_sfg" //22f3a4948b80
  "c025e9a84c8a": "cykelson_bergsg" //8a09b7e13818
  "8416f92daa8e": "beauty.r.salong_fisk" //dab0b01603a8
  "c025e999ea9a": "thaithai" //1ae441efb720
  "c025e999e6ea": "thaithai" //46e7340fab78
};

function getnodedesc(nodeid) {
  if (!nodeid || !descs.hasOwnProperty(nodeid)) return "";
  return descs[nodeid];
}
