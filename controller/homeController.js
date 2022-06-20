
import '../libs/jquery.js'

import * as homeView from '../view/homeView.js'

import * as homeModel from '../model/homeModel.js'

let leaderName = homeModel.data.leaderName
let leaderBio = homeModel.data.leaderBio

homeView.load(leaderName,leaderBio)

console.log($('#leader-section'))