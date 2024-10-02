<template>
  <section
    id="home"
    class="home flex items-center justify-evenly min-h-screen bg-bg-color text-center"
  >
    <div class="home-content mb-12 text-left text-white">
      <h3 class="">Hello, It's Me</h3>
      <h1 class="" >Kuldip Korat</h1>
      <h3 class="">And I'm a <span class="multiple-text !text-[#0ef]">Frontend Developer</span></h3>
      <p class="text-lg mt-6 text-text-color animate-slideLeft">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est molestias
        culpa at nemo quae quos!
      </p>
      <div class="social-media mt-8">
        <a href="https://www.linkedin.com/in/kuldipkorat"
          ><i class="bx bxl-linkedin"></i
        ></a>
        <a href="https://github.com/kuldipkorat"
          ><i class="bx bxl-github"></i
        ></a>
        <a href="https://www.facebook.com/kuldip.korat.3"
          ><i class="bx bxl-facebook"></i
        ></a>
        <a href="https://www.instagram.com/mr.k_k._/"
          ><i class="bx bxl-instagram"></i
        ></a>
      </div>
      <a
        href="Kuldip_RESUME_.pdf"
        class="btn"
        download
        >Download Resume</a
      >
    </div>
    <div class="home-img">
      <img
        src="@/assets/home.png"
        alt="Profile Image"
        class="w-64 h-auto animate-zoomIn"
      />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>

:root {
  --bg-color: #1f242d;
  --second-bg-color: #323946;
  --text-color: #fff;
  --main-color: #0ef;
}
.home{
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 70px 10% 0;

}
.home-content{
    max-width: 600px;
    margin-left: 60px;
}
.home-content h3:nth-of-type(2){
    margin-bottom: 30px;
}
.home-content h3{
    font-size:1.2rem;
    font-weight: 700;
    opacity: 0;
    animation: slideBottom 1s ease forwards ;
    animation-delay: .7s;

}
.home-content h3:nth-of-type(2){
    margin-bottom: 3rem;
    animation: slideTop 1s ease forwards ;
   animation-delay: .7s;

}
 span{
    color:var(--main-color);
}
.home-content h1{
    font-size: 5.6rem;
    font-weight: 700;
    line-height: 1.3;
    margin: -3px 0px;
    opacity: 0;
    animation: slideRight 1s ease forwards ;
   animation-delay: 1s;

}

.home-content p{
    font-size: 1.6rem;
    opacity: 0;
    animation: slideLeft .5s ease forwards ;
   animation-delay: 1s;
}
.home-img img {
    max-width: 35rem;
    margin-right: 3.1rem;
    margin-bottom: 2.1rem;
    /* border-radius: 1957px 1957px; 
     box-shadow: 0 70px #0ef; */
     opacity: 0;
     animation: zoomIn 1s ease forwards, floatImage 4s ease-in-out infinite ;
     animation-delay: 2s, 3s;
}
.social-media a {   
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    background: transparent;
    border: .2rem solid #0ef;
    border-radius: 50%;
    font-size: 2rem;
    color: #0ef;
    text-decoration: none;
    margin: 3rem 1.5rem 3rem 0;
    transition: .5s ease;
    opacity: 0;
    animation: slideLeft 1s ease forwards ;
   animation-delay: calc(.2s * var(--i));
}

.social-media a:hover{
    background: #0ef;;
    color:#1f242d;
    box-shadow: 0 0 2rem #0ef;;
}

.btn{
    display: inline-block;
    padding:1.2rem 2.8rem;
    background: #0ef;
    border-radius: 4rem;
    box-shadow: 0 0 1rem #0ef;
    font-size: 1.6rem;
    color: #1f242d;
    letter-spacing: .1rem;
    text-decoration: none;
    font-weight: 600;
    opacity: 0;
    animation: slideTop 1s ease forwards ;
    animation-delay: 2s;
    transition: .5s ease;
}
.btn:hover {
box-shadow: none;
}


</style>
