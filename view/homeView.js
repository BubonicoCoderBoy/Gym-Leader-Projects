
import '../libs/jquery.js'

export function load(data1,data2){

	$('#root').append(headerHTML())

	$('#root').append(leaderSectionHTML(data1,data2))

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

function leaderSectionHTML(data1,data2){

	const leaderSecHTML =

		`<section id="leader-section">

		<h1 class="leader-section-title">Lider de Ginásio</h1>

		<img id="leader-section-bg" src="./img/bg.png" alt="">

		<div id="leader-section-pic">

			<img id="leader-pic" src="img/gymLeader.png" alt="">
			
		</div>

		<div id="leader-section-list">
			
			<ul>
				<li class="listItem1">
					
					<div class="listIcon">
						<img src="img/pkm1.png" alt="">
					</div>
					<div class="pkmLabel">
						<h4>Geodude</h4>
						<p>Detalhes do Pkm / Tipo / HP</p>
						<p>Detalhes do Pkm / Tipo / HP</p>
					</div>

				</li>
				<li class="listItem2">
					
					<div class="listIcon">
						<img src="img/pkm2.png" alt="">
					</div>
					<div class="pkmLabel">
						<h4>Sandslash</h4>
						<p>Detalhes do Pkm / Tipo / HP</p>
						<p>Detalhes do Pkm / Tipo / HP</p>
					</div>

				</li>
				<li class="listItem3">
					
					<div class="listIcon">
						<img src="img/pkm3.png" alt="">
					</div>
					<div class="pkmLabel">
						<h4>Rhyhorn</h4>
						<p>Detalhes do Pkm / Tipo / HP</p>
						<p>Detalhes do Pkm / Tipo / HP</p>
					</div>

				</li>
				<li class="listItem4">
					
					<div class="listIcon">
						<img src="img/pkm4.png" alt="">
					</div>
					<div class="pkmLabel">
						<h4>Onix</h4>
						<p>Detalhes do Pkm / Tipo / HP</p>
						<p>Detalhes do Pkm / Tipo / HP</p>
					</div>

				</li>
			</ul>

		</div>

		<div id="leader-section-misc">
			
			<h2>${data1}</h2>
			<p>${data2}</p>

		</div>
	</section>`

	return $(leaderSecHTML)

}

function cardSectionHTML(){

	const cardSecHTML =

	`<section id="card-section">
		
		<h1 class="card-section-title">Pontos Turisticos</h1>

		<div class="card">
			
			<img src="./img/card1.png" alt="" class="card-img">

			<div class="card-label">
				<h2>Museu de Pewter</h2>
				<p>descrição</p>
			</div>

		</div>

		<div class="card">
			
			<img src="./img/card2.png" alt="" class="card-img">

			<div class="card-label">
				<h2>Praça Central</h2>
				<p>descrição</p>
			</div>

		</div>

		<div class="card">
			
			<img src="./img/card3.png" alt="" class="card-img">

			<div class="card-label">
				<h2>Pokecentro</h2>
				<p>descrição</p>
			</div>

		</div>
		<div class="card">
			
			<img src="./img/card1.png" alt="" class="card-img">

			<div class="card-label">
				<h2>Museu de Pewter</h2>
				<p>descrição</p>
			</div>

		</div>
		<div class="card">
			
			<img src="./img/card1.png" alt="" class="card-img">

			<div class="card-label">
				<h2>Museu de Pewter</h2>
				<p>descrição</p>
			</div>

		</div>

		<div class="card">
			
			<img src="./img/card1.png" alt="" class="card-img">

			<div class="card-label">
				<h2>Museu de Pewter</h2>
				<p>descrição</p>
			</div>

		</div>

		<div class="card">
			
			<img src="./img/card2.png" alt="" class="card-img">

			<div class="card-label">
				<h2>Praça Central</h2>
				<p>descrição</p>
			</div>

		</div>

		<div class="card">
			
			<img src="./img/card3.png" alt="" class="card-img">

			<div class="card-label">
				<h2>Pokecentro</h2>
				<p>descrição</p>
			</div>

		</div>
	</section>`

	return $(cardSecHTML)

}