all:
	dendrynexus make-html --pretty
	cp out/html/* ./
	zip game.zip *.js index.html *.css img/*
deploy:
	butler push game.zip red-autumn/jiaozi:win-mac-linux-android
deploy-dl:
	butler push game.zip red-autumn/jiaozi:download
