// JavaScript Document

$(document).ready(function() {

var date = new Date();

var date_today = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
var days_in_month = new Array(31,28,31,30,31,30,31,31,30,31,30,31);


function calendar() {

	if(year%4 == 0 && year!=1900)
	{
		days_in_month[1]=29;
}
		var table = '<table class="cal_calendar"> <tbody id="cal_body"><tr><th colspan="7">'+date_today +" " + months[month] + " " + year +'</th></tr>';
		
		table = table + '<tr class="cal_d_weeks"><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>';
	
	var week = 0;
	//var beg_j = date;
	var beg_j = new Date(year,month,1);
	var total = days_in_month[month];
	//beg_j.setDate(1);
	//beg_j.setMonth(month);
	//		alert(beg_j);
	
	if(beg_j.getDate()==2)
	{		
	beg_j=setDate(0);
	}	
	beg_j = beg_j.getDay();		
	for(i=1;i<=beg_j;i++)	
	{		
	table = table + '<td class="cal_days_bef_aft">'+(days_in_month[month-1]-beg_j+i)+'</td>';		week++;	
	}	
	for(i=1;i<=total;i++)	
	{		
		if(week==0)		
		{
			table = table + '</tr><tr>';		
		}		
		if(date_today==i)		
		{			
		table = table + '<td class="cal_today">'+i+'</td>';		
		}		
		else		
		{			
		table = table + '<td>'+i+'</td>';		
		}		
		week++;		
		if(week==7)		
		{			
		table = table + '</tr>';			
		week=0;		
		}	
	}	
	for(i=1;week!=0;i++)	
	{		
	table = table + '<td class="cal_days_bef_aft">'+i+'</td>';		
	week++;		
		if(week==7)		
		{			
		table = table + '</tr>';			
		week=0;		
		}	
	}	
	table = table + '</tbody></table>';		
	$('.wrapper').html(table);			
	} calendar();		
	$('#left').click(function leftFun()
	{
		month=month-1;
		if(month<0)
		{
			year=year-1;
			month=11;
		}
		calendar();	
	});	
	$('#right').click(function rightFun()
	{
		month=month+1;
		if(month>=11)
		{
			year=year+1;
			month=0;
			
		}
		console.log(month);
		calendar();	
	});	
});