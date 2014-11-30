var visualizeFlashPoll = function(){
	this.flashdata;
	this.pollsetOptions;
	this.supercontainer;
	this.optionsdata = new optionHandler();

	this.init = function(callback){
		var self = this;
		var username = "fp_user";
		var password = "62f1b45156af483d52f5f99c9b764007092193f9";
		var c = username + ":" + password;
		c = Base64.encode(c);
		d3.json(url).header("Authorization", "Basic "+c)
		.get(function(error,structure) {
			d3.json(url+"/results").header("Authorization", "Basic " + btoa(username + ":" + password))
			.get(function(error,data) {
				d3.json(url+"/result").header("Authorization", "Basic " + btoa(username + ":" + password))
				.get(function(error,frequency) {
					flashpoll.visualizeChart(self,structure,data,frequency,question,chart,container,options);
				});
			});
		});
	}
	this.initlocal = function(url,callback){
		this.flashdata = new flashdata();
		this.flashdata.seturl(url);
		var self = this;
		this.flashdata.getDataLocal(function(){
			callback();

		});
	}
	this.flashChart = function(url,question,container,chart,options){
		var self = this;
		d3.json(url+".json", function(structure) {
			d3.json(url+"results.json", function(data) {
				d3.json(url+"result.json", function(frequency) {
					console.log(data);
					console.log(frequency);
					flashpoll.visualizeChart(self,structure,data,frequency,question,chart,container,options);
				});
			});
		});
	}
	this.chart = function(question,container,chart,options){
		flashpoll.visualizeChart(this,this.flashdata.structure,this.flashdata.data,this.flashdata.frequency,question,chart,container,options);
	}
	this.flashChartd = function(url,question,container,chart,options){
		var username = "fp_user";
		var password = "62f1b45156af483d52f5f99c9b764007092193f9";
		var c = username + ":" + password;
		c = Base64.encode(c);
		d3.json(url).header("Authorization", "Basic "+c)
		.get(function(error,structure) {
			console.log("Basic " + btoa(username + ":" + password));
			console.log(error);
			console.log(structure);
/*			d3.json(url+"/results").header("Authorization", "Basic " + btoa(username + ":" + password))
			.get(function(error,data) {
				d3.json(url+"/result").header("Authorization", "Basic " + btoa(username + ":" + password))
				.get(function(error,frequency) {

					console.log(data);
					console.log(frequency);
					flashpoll.visualizeChart(self,structure,data,frequency,question,chart,container,options);

				});
			});*/
		});
	}
}