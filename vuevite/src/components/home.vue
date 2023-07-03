<template >
    <div class="container mt-5 d-flex ">
        <div id="rasim_uchun" class="d-flex gap-2">
            <img :src="imageUrl" alt="" id="mxs_images">
            <form action="" class="form-control">
                <input type="range" class="form-range inp1" v-model="opacity1" :aria-label="parseInt((opacity1))" />
                <input type="range" class="form-range inp2" v-model="brightness1" :aria-label="parseInt((brightness1))" min="0"
                    max="500" />
                <input type="range" class="form-range inp3" v-model="contrast" :aria-label="parseInt((contrast))" min="0" max="500" />
                <input type="range" class="form-range inp4" v-model="saturation1" :aria-label="parseInt((saturation1))" min="0"
                    max="500" />
                <input type="range" class="form-range inp5" v-model="grayscale1" :aria-label="parseInt((grayscale1))" min="0"
                    max="500" />
                <input type="range" class="form-range inp6" v-model="sepia1" :aria-label="parseInt((sepia1))" min="0" max="500" />
                <input type="range" class="form-range inp6" v-model="blur1" :aria-label="parseInt((blur1))" min="0" max="500" />
                <input type="range" class="form-range inp6" v-model="invert1" :aria-label="parseInt((invert1))" min="0" max="500" />
            </form>
            <input type="file" @change="handleFileUpload" accept="image/*" />
        </div>
        <div id="tayyor_rasim_uchun" class="d-flex justify-content-end">
            <img :src="imageUrl" alt="" id="mxs_tayyor_rasim" :style="`filter:opacity(${opacity1}%)  brightness(${brightness1}%) contrast(${contrast}%) saturate(${saturation1}%) grayscale(${grayscale1}%) sepia(${sepia1}%) blur(${blur1}px) invert(${invert1}%);`">
        </div>
        <button @click="downloadStyledImage">Yuklash</button>
    </div>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue';
let opacity1 = ref(100);
let brightness1 = ref(100);
let contrast = ref(100);
let saturation1 = ref(100);
let grayscale1 = ref(0);
let sepia1 = ref(0);
let blur1 = ref(0);
let invert1 = ref(0)
// let imageUrl = ref("../assets/mxs.jpg");
let imageUrl = ref(new URL('../assets/mxs.jpg', import.meta.url));
let imageStyle = ref(``);

let handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
        imageUrl.value = e.target.result;
    };

    reader.readAsDataURL(file);
}

 
 
    
let downloadStyledImage = () => {
  const canvas = document.createElement('canvas');
  const image = document.getElementById('mxs_tayyor_rasim');
  const imageUrl = image.src;
  const ctx = canvas.getContext('2d');
  
  // Rasimni o'lchamlariga moslashtiramiz
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  
  // Rasimni stil bilan chizamiz
  ctx.filter = `opacity(${opacity1}%) brightness(${brightness1}%) contrast(${contrast}%) saturate(${saturation1}%) grayscale(${grayscale1}%) sepia(${sepia1}%) blur(${blur1}px) invert(${invert1}%)`;
  ctx.drawImage(image, 0, 0);
  
  // Rasmning stil bilan tasviri (DataURL)
  const styledImageUrl = canvas.toDataURL();
  
  // Yuklash uchun link yaratish
  const link = document.createElement('a');
  link.href = styledImageUrl;
  link.download = 'tayyor_rasim_styled.jpg';
  link.click();
}
</script>
<style scoped>
.container {
    color: rgb(222, 222, 222);
    justify-content: space-between;
    flex-wrap: wrap; 
}

form {
    width: 40%;
    background: none;
    border: none;
}

input {
    position: relative;
}

.inp1::before,
.inp2::before,
.inp3::before,
.inp4::before,
.inp5::before,
.inp6::before {
    content: attr(aria-label);
    position: absolute;
    color: aliceblue;
    right: -40px;
}

#rasim_uchun {
    width: 66%;
    border-radius: 2px;
    padding: 10px;
    flex-wrap: wrap;
}

#tayyor_rasim_uchun {
    width: 34%;
    border-radius: 2px;
    
    padding: 10px;
}

#mxs_images {
    width: 420px;
    height: 520px;
    /* filter: opacity(50%); */
    object-fit: cover;
    border-radius: 5px;

}

#mxs_tayyor_rasim {
    width: 420px;
    height: 520px;
    object-fit: cover;
    border-radius: 5px;
    /* filter: brightness(100%); qoraytirish  + */
    /* filter:contrast(10%); Tumanni + */
    /* filter:grayscale(70%); rangsizga keltirish + */
    filter: invert(200%) sargish aralash
        /* filter:opacity(30%); +  */
        /* filter:saturate(20%); +  */
        /* filter: sepia(90%); */




}</style>
 
