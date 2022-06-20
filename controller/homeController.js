
import '../libs/jquery.js'

import * as homeView from '../view/homeView.js'

import * as homeModel from '../model/homeModel.js'

homeView.load(homeModel.data[0])

$('button:eq(0)')
	.click(function(){
		homeView.load(homeModel.data[0])
		alert('O problema ta no ./view/homeView.js na função load')
	})

$('button:eq(1)')
	.click(function(){
		homeView.load(homeModel.data[1])
		alert('O problema ta no ./view/homeView.js na função load')
	})

/*

Anotações

Fragmentar a homeView em 3 views diferentes com seus respectivos
controladores :v

*/