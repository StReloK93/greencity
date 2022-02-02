<template>
	<router-view></router-view>
</template>
<style>

@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
.bg-gradient {
   background: linear-gradient(105deg, #e3e3e3 45%, #59b89a  45.1%);
}
.text-blue{
   font-family: 'Dancing Script', cursive;
   color: #59b89a ;
}

.imageadd{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
}
.allphotos_images{
	/* width: 80px;
	height: 80px; */
	object-fit: cover;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s ,transform .2s;
}
.fade-enter-from  {
  opacity: 0;
  transform: scale(0.95);
}
.fade-leave-to  {
  opacity: 0;
  transform: scale(1.05);
}
.imgwhite{
   filter: brightness(0) invert(1);
}

button, input, optgroup, select, textarea{
    color: black;
}
canvas{
    outline: none;
}

.menu{
	left: 80px;
	width: 170px;
}

.menu::after{
	content: "";
	position: absolute;
	top: 19px;
	left: -20px;
	border: 10px solid transparent;
	border-right: 10px solid #f3f4f6;
}

.color{
	height: 20px;
	width: 50px;
	display: inline-block;
}
</style>