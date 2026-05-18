const BASE_URL = "https://api.myquran.com/v2"; // Gunakan v2 yang stabil untuk jadwal
const KOTA_DEPOK = "1221"; // Kode kota Depok untuk STT NF

export const getPrayerTimes = async () => {
  const today = new Date().toISOString().split("T")[0].replace(/-/g, "/");
  const cachedData = localStorage.getItem(`prayer_${today}`);

  if (cachedData) return JSON.parse(cachedData);

  try {
    const response = await fetch(
      `${BASE_URL}/sholat/jadwal/${KOTA_DEPOK}/${today}`,
    );
    const result = await response.json();
    if (result.status) {
      localStorage.setItem(
        `prayer_${today}`,
        JSON.stringify(result.data.jadwal),
      );
      return result.data.jadwal;
    }
  } catch (error) {
    console.error("Gagal mengambil jadwal sholat:", error);
    return null;
  }
};
