<template>
  <div id="app">
    <section class="bg_dark-blue-0 px-2 pt-2">
			<div class="container-xl bg_dark-blue-1 rounded-pill rounded-bottom rounded-3 px-0 pt-5 w-100">
				
			</div>
			<div class="container-xl bg_dark-blue-1 rounded-0 px-3 py-1 my-0 w-100">
				<div class="font_Montserrat h3 my-0 text-center fw-bold text_yellow-white-grey-0" href="#">PRED</div>
				
				<nav class="navbar navbar-expand navbar-dark my-0">
					<ul class="navbar-nav mx-auto h6 font_Montserrat">
						<li class="nav-item px-2">
							<router-link to="/feed" class="small fw-bold link-no-underline link-light text_yellow-white-grey-3">FEED</span></router-link>
						</li>
						<li class="nav-item px-2">
              <router-link to="/profile" class="small fw-bold link-no-underline link-light text_yellow-white-grey-3">PROFILE</span></router-link>
						</li>
					</ul>
				</nav>
			</div>
		</section>
    <router-view/>
    <footer class="bg_dark-blue-0 px-2">
			<div class="container-fluid text-center fw-bold bg_dark-blue-0 rounded-0 px-3 py-1 pt-3 w-100 h-100">
				<p class="mb-1 text_yellow-white-grey-3">&copy; 2017–2021 PRED</p>
				<ul class="list-inline small">
					<li class="list-inline-item"><a href="#" class="nav-link link-light text_yellow-white-grey-6 p-0 m-0">ABOUT</a></li>
					<li class="list-inline-item"><a href="#" class="nav-link link-light text_yellow-white-grey-6 p-0 m-0">HOW IT WORKS</a></li>
					<li class="list-inline-item"><a href="#" class="nav-link link-light text_yellow-white-grey-6 p-0 m-0">FAQS</a></li>
					<li class="list-inline-item"><a href="#" class="nav-link link-light text_yellow-white-grey-6 p-0 m-0">PRIVACY</a></li>
					<li class="list-inline-item"><a href="#" class="nav-link link-light text_yellow-white-grey-6 p-0 m-0">TERMS</a></li>
					<li class="list-inline-item"><a href="#" class="nav-link link-light text_yellow-white-grey-6 p-0 m-0">REGULATIONS</a></li>
					<li class="list-inline-item"><a href="#" class="nav-link link-light text_yellow-white-grey-6 p-0 m-0">HELP CENTER</a></li>
					<li class="list-inline-item"><a href="#" class="nav-link link-light text_yellow-white-grey-6 p-0 m-0">TWITTER</a></li>
				</ul>
			</div>
		</footer>
  </div>
</template>

<style>
</style>
