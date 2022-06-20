
import '../libs/jquery.js'

export function load(leader){

	$('#root').append(headerHTML())

	$('#root').append(leaderSectionHTML(leader))

	$('#root').append(cardSectionHTML())

}

function headerHTML(){
	
	const headerHTML =

	`<header>
		<div id="title">
			<h1>Pagina Gym Leader</h1>
		</div>
		<nav>
			<button>Brock</button>
			<button>Misty</button>
			<button>Lt.Surge</button>
			<button>Erika</button>
		</nav>
	</header>`

	return $(headerHTML)

}

function leaderSectionHTML(obj){

	const leaderSecHTML =

		`<section id="leader-section">

		<h1 class="leader-section-title">Lider de Ginásio</h1>

		<img id="leader-section-bg" src="${obj.bgImgSrc}" alt="">

		<div id="leader-section-pic">

			<img id="leader-pic" src="${obj.imgSrc}" alt="">
			
		</div>

		<div id="leader-section-list">
			
			<ul>
				<li class="listItem1">
					
					<div class="listIcon">
						<img src="${obj.pkms[0].imgSrc}" alt="">
					</div>
					<div class="pkmLabel">
						<h4>${obj.pkms[0].name}</h4>
						<p>${obj.pkms[0].details1}</p>
						<p>${obj.pkms[0].details2}</p>
					</div>

				</li>
				<li class="listItem2">
					
					<div class="listIcon">
						<img src="${obj.pkms[1].imgSrc}" alt="">
					</div>
					<div class="pkmLabel">
						<h4>${obj.pkms[1].name}</h4>
						<p>${obj.pkms[1].details1}</p>
						<p>${obj.pkms[1].details2}</p>
					</div>

				</li>
				<li class="listItem3">
					
					<div class="listIcon">
						<img src="${obj.pkms[2].imgSrc}" alt="">
					</div>
					<div class="pkmLabel">
						<h4>${obj.pkms[2].name}</h4>
						<p>${obj.pkms[2].details1}</p>
						<p>${obj.pkms[2].details2}</p>
					</div>

				</li>
				<li class="listItem4">
					
					<div class="listIcon">
						<img src="${obj.pkms[3].imgSrc}" alt="">
					</div>
					<div class="pkmLabel">
						<h4>${obj.pkms[3].name}</h4>
						<p>${obj.pkms[3].details1}</p>
						<p>${obj.pkms[3].details2}</p>
					</div>

				</li>
			</ul>

		</div>

		<div id="leader-section-misc">
			
			<h2>${obj.name}</h2>
			<p>${obj.bio}</p>

		</div>
	</section>`

	return $(leaderSecHTML)

}

function cardSectionHTML(){

	const cardSecHTML =

	`<section id="card-section">
		
		<h1 class="card-section-title">Pontos Turisticos</h1>

		<div class="card">
			
			<img src="./img/cards/card1.png" alt="" class="card-img">

			<div class="card-label">
				<h2>Museu de Pewter</h2>
				<p>descrição</p>
			</div>

		</div>

		<div class="card">
			
			<img src="./img/cards/card2.png" alt="" class="card-img">

			<div class="card-label">
				<h2>Praça Central</h2>
				<p>descrição</p>
			</div>

		</div>

		<div class="card">
			
			<img src="./img/cards/card3.png" alt="" class="card-img">

			<div class="card-label">
				<h2>Pokecentro</h2>
				<p>descrição</p>
			</div>

		</div>
		<div class="card">
			
			<img src="./img/cards/card1.png" alt="" class="card-img">

			<div class="card-label">
				<h2>Museu de Pewter</h2>
				<p>descrição</p>
			</div>

		</div>
		<div class="card">
			
			<img src="./img/cards/card1.png" alt="" class="card-img">

			<div class="card-label">
				<h2>Museu de Pewter</h2>
				<p>descrição</p>
			</div>

		</div>

		<div class="card">
			
			<img src="./img/cards/card1.png" alt="" class="card-img">

			<div class="card-label">
				<h2>Museu de Pewter</h2>
				<p>descrição</p>
			</div>

		</div>

		<div class="card">
			
			<img src="./img/cards/card2.png" alt="" class="card-img">

			<div class="card-label">
				<h2>Praça Central</h2>
				<p>descrição</p>
			</div>

		</div>

		<div class="card">
			
			<img src="./img/cards/card3.png" alt="" class="card-img">

			<div class="card-label">
				<h2>Pokecentro</h2>
				<p>descrição</p>
			</div>

		</div>
	</section>`

	return $(cardSecHTML)

}