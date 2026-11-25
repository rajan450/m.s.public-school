// Edit these values to update the whole website.
export const SCHOOL = {
  name: "M.S. Public School",
  // WhatsApp number: country code + number, no "+" or spaces.
  // Read from the school signboard in the photo. Please confirm it with the school.
  whatsapp: "919454270751",
  phoneDisplay: "+91 94542 70751",
  address:
    "Purani Mill, near Mahadev Gas Agency, Suddhipur, Shivpur, Maheshpur, Varanasi, Uttar Pradesh 221002",
  mapsUrl: "https://maps.app.goo.gl/c8BRBpfSWZMMM2r79?g_st=aw",
  hours: "Monday to Saturday (to be confirmed)",
};

export const waLink = (text) =>
  `https://wa.me/${SCHOOL.whatsapp}?text=${encodeURIComponent(text)}`;
