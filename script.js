/* COPYRIGHT (C) 2024 - SWATHYMOL SAJEEV | GNU General Public License v3.0

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, 
either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful,but WITHOUT ANY WARRANTY; 
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>. */

const container = document.querySelector(".container");
const slider = document.querySelector(".slider");
const before = document.querySelector(".img-container-before");
const after = document.querySelector(".img-container-after");

const dragSlider = (e) => {

    let x = e.layerX;
    let size = container.offsetWidth;
    before.style.width = x + "px";
    slider.style.left = x + "px";

    if(x < 30){
        before.style.width = 0;
        slider.style.left = 0;
    }

    if(x + 30 > size){
        before.style.width = size + "px";
        slider.style.left = size + "px";
    }


};

container.addEventListener("mousemove", dragSlider);