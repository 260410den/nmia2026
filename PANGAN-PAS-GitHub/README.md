# PANGAN PAS

Prototype dashboard untuk melihat simulasi perubahan harga pangan antarprovinsi di Indonesia. Peta memakai MapLibre dengan data batas provinsi lokal; harga dan tren yang tampil merupakan data simulasi.

## Menjalankan lokal

```bash
npm install
```

Salin `.env.example` menjadi `.env.local`, lalu isi `NVIDIA_API_KEY` untuk mengaktifkan asisten AI. Jangan commit `.env.local` atau membagikan API key di repository publik.

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Stack

- React dan Vite
- MapLibre GL JS dengan OpenFreeMap
- Recharts
- NVIDIA chat completions API untuk asisten pangan
