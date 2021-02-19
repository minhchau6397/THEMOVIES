import { useState, useEffect } from 'react'

export const pad = (num) => {
	if (num < 10) {
		return "0" + num;
	} else {
		return "" + num;
	}
}

//-----Convert date to string yyyy-mm-dd (example "1990-03-22")
export const dateToString = (date) => {
	return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate());
}

//-----Convert time to second
export const timestrToSec = (timestr) => {
	let part = timestr.split(":");
	return (part[0] * 3600) + (part[1] * 60);
}

//-----Convert second to hours (exmaple 23:00)
export const formatTime = (second) => {
	return [pad(Math.floor(second / 3600)), pad(Math.floor(second / 60) % 60)].join(":");
}

//-----Format to vietnam region dd-mm-yyyy
export const formatVNDate = (strDate) => {
	if (strDate) {
		let res = strDate.split(/[.\-\/ ]+/);
		return `${res[2]}.${res[1]}.${res[0]}`;
	}
}

//-----Sum date
export const sumDate = (strDate, day) => {
	if (strDate) {
		let res = strDate.split(/[.\-\/ ]+/);
		let date = new Date(res[0], res[1], res[2]);
		date.setDate(date.getDate() + day);
		return dateToString(date);
	}
}


//------------Window Dimension
const getWindowDimension = () => {
	const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
	return { windowWidth, windowHeight };
}

export const useWindowDimension = () => {
	const [windowDimension, setWindowDimension] = useState(getWindowDimension());

	useEffect(() => {
		function handleResize() {
			setWindowDimension(getWindowDimension());
		}
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])
	return windowDimension;
}


//------------------SCROLL TO 
/*
// Element or Position to move + Time in ms (milliseconds)
export function scrollTo(element, duration) {
	var e = document.documentElement;
	if (e.scrollTop === 0) {
		var t = e.scrollTop;
		++e.scrollTop;
		e = t + 1 === e.scrollTop-- ? e : document.body;
	}
	scrollToC(e, e.scrollTop, element, duration);
}


// Element to move, element or px from, element or px to, time in ms to animate
function scrollToC(element, from, to, duration) {
	if (duration <= 0) return;
	if(typeof from === "object")from=from.offsetTop;
	if(typeof to === "object")to=to.offsetTop;

	scrollToX(element, from, to, 0, 1/duration, 20, linearTween);
}

function scrollToX(element, xFrom, xTo, t01, speed, step, motion) {
	if (t01 < 0 || t01 > 1 || speed<= 0) {
	   element.scrollTop = xTo;
		return;
	}
	element.scrollTop = xFrom - (xFrom - xTo) * motion(t01);
	t01 += speed * step;

	setTimeout(function() {
		scrollToX(element, xFrom, xTo, t01, speed, step, motion);
	}, step);
}


//-------EASE
function linearTween(t){
	return t;
}

function easeInQuad(t){
	return t*t;
}

function easeOutQuad(t){
	return -t*(t-2);
}

function easeInOutQuad(t){
	t/=0.5;
	if(t<1)return t*t/2;
	t--;
	return (t*(t-2)-1)/2;
}

function easeInCuaic(t){
	return t*t*t;
}

function easeOutCuaic(t){
	t--;
	return t*t*t+1;
}

function easeInOutCuaic(t){
	t/=0.5;
	if(t<1)return t*t*t/2;
	t-=2;
	return (t*t*t+2)/2;
}

function easeInQuart(t){
	return t*t*t*t;
}

function easeOutQuart(t){
	t--;
	return -(t*t*t*t-1);
}

function easeInOutQuart(t){
	t/=0.5;
	if(t<1)return 0.5*t*t*t*t;
	t-=2;
	return -(t*t*t*t-2)/2;
}

function easeInQuint(t){
	return t*t*t*t*t;
}

function easeOutQuint(t){
	t--;
	return t*t*t*t*t+1;
}

function easeInOutQuint(t){
	t/=0.5;
	if(t<1)return t*t*t*t*t/2;
	t-=2;
	return (t*t*t*t*t+2)/2;
}

function easeInSine(t){
	return -Math.Cos(t/(Math.PI/2))+1;
}

function easeOutSine(t){
	return Math.Sin(t/(Math.PI/2));
}

function easeInOutSine(t){
	return -(Math.Cos(Math.PI*t)-1)/2;
}

function easeInExpo(t){
	return Math.Pow(2,10*(t-1));
}

function easeOutExpo(t){
	return -Math.Pow(2,-10*t)+1;
}

function easeInOutExpo(t){
	t/=0.5;
	if(t<1)return Math.Pow(2,10*(t-1))/2;
	t--;
	return (-Math.Pow(2,-10*t)+2)/2;
}

function easeInCirc(t){
	return -Math.Sqrt(1-t*t)-1;
}

function easeOutCirc(t){
	t--;
	return Math.Sqrt(1-t*t);
}

function easeInOutCirc(t){
	t/=0.5;
	if(t<1)return -(Math.Sqrt(1-t*t)-1)/2;
	t-=2;
	return (Math.Sqrt(1-t*t)+1)/2;
}
*/