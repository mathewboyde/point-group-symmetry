$(document).ready(function(){
	a = '#main_flow ';
	m_ = [
		[$(a+'#r_0'),$(a+'#r_0 #q_0')],
		[$(a+'#r_1'),$(a+'#r_1 #q_1')],
		[$(a+'#r_2'),$(a+'#r_2 #q_2')],
		[$(a+'#r_3'),$(a+'#r_3 #q_3')],
		[$(a+'#r_4'),$(a+'#r_4 #q_4')]
	];
	r2_ = [
		[$(a+'#r_2'),$(a+'#r_2 #q_2_a')],
		[$(a+'#r_2'),$(a+'#r_2 #q_2_b')],
		[$(a+'#r_2_1'),$(a+'#r_2_1 #q_2_1')],
		[$(a+'#r_2_2'),$(a+'#r_2_2 #q_2_2')],
		[$(a+'#r_2_3'),$(a+'#r_2_3 #q_2_3')],
		[$(a+'#r_2_4'),$(a+'#r_2_4 #q_2_4')],
	];
	r2_1 = [
		[$(a+'#r_2_1_1'),$(a+'#r_2_1_1 #q_2_1_1')],
		[$(a+'#r_2_1_2'),$(a+'#r_2_1_1 #q_2_1_2')],
	];
	
	
	$(a+'#r_0 #q_0').click(function(){
		if($(this).is(':checked') == true){
			m_hide(0);
			$(a+'#r_0_1').show();
			$(a+'#result #group').html('C<sub>&#x221e;v</sub>');
		}
		else{
			$(a+'#r_0_1 #q_0_1').prop('checked', false);
			$(a+'#r_0_1').hide();
			m_show();
			$(a+'#result #group').html('C<sub>1</sub>');
		}
	});
	$(a+'#r_0_1 #q_0_1').click(function(){
		if($(this).is(':checked') == true){
			$(a+'#result #group').html('D<sub>&#x221e;h</sub>');
		}
		else{
			$(a+'#result #group').html('C<sub>&#x221e;v</sub>');
		}
	});
	$(a+'#r_1 #q_1').click(function(){
		if($(this).is(':checked') == true){
			m_hide(1);
			$(a+'#r_1_1').show();
			$(a+'#result #group').html('T<sub>d</sub>');
		}
		else{
			$(a+'#r_1_1 #q_1_1').prop('checked', false);
			$(a+'#r_1_1').hide();
			$(a+'#r_1_2 #q_1_2').prop('checked', false);
			$(a+'#r_1_2').hide();
			m_show();
			$(a+'#result #group').html('C<sub>1</sub>');
		}
	});
	$(a+'#r_1_1 #q_1_1').click(function(){
		if($(this).is(':checked') == true){
			$(a+'#r_1_2').show();
			$(a+'#result #group').html('O<sub>h</sub>');
		}
		else{
			$(a+'#r_1_2 #q_1_2').prop('checked', false);
			$(a+'#r_1_2').hide();
			$(a+'#result #group').html('T<sub>d</sub>');
		}
	});
	$(a+'#r_1_2 #q_1_2').click(function(){
		if($(this).is(':checked') == true){
			$(a+'#result #group').html('I<sub>h</sub>');
		}
		else{
			$(a+'#result #group').html('O<sub>h</sub>');
		}
	});
	$(a+'#r_2 #q_2').click(function(){
		if($(this).is(':checked') == true){
			m_hide(2);
			r2_show();
			$(a+'#result #group').html('C<sub>2</sub>');
		}
		else{
			$(a+'#r_2 #q_2_n').val('2');
			r2_hide();
			m_show();
			$(a+'#result #group').html('C<sub>1</sub>');
		}
	});
	$(a+'#r_2 #q_2_n').change(function(){
		n = $(this).val();
		t = $(a+'#result #group').html();
		r_str = "";
		
		if(t.includes('S') == true){
			$(a+'#result #group').html('S<sub>'+(n * 2)+'</sub>');
		}
		else{
			m_type = t.substr(0,1);
			if(t.includes('d') == true || t.includes('h') == true || t.includes('v') == true){
				s_type = t.substr(-7,1);
				$(a+'#result #group').html(m_type+'<sub>'+n+s_type+'</sub>');
			}
			else{
				$(a+'#result #group').html(m_type+'<sub>'+n+'</sub>');
			}
		}
	});
	$(a+'#r_2_1 #q_2_1').click(function(){
		n = $(a+'#r_2 #q_2_n').val();
		if($(this).is(':checked') == true){
			r2s_hide(1);
			r2s1_show();
			$(a+'#result #group').html('D<sub>'+n+'</sub>');
		}
		else{
			r2s1_hide();
			r2s_show();
			$(a+'#result #group').html('C<sub>'+n+'</sub>');
		}
	});
	$(a+'#r_2_2 #q_2_2').click(function(){
		n = $(a+'#r_2 #q_2_n').val();
		if($(this).is(':checked') == true){
			r2s_hide(2);
			$(a+'#result #group').html('C<sub>'+n+'h</sub>');
		}
		else{
			r2s_show();
			$(a+'#result #group').html('C<sub>'+n+'</sub>');
		}
	});
	$(a+'#r_2_3 #q_2_3').click(function(){
		n = $(a+'#r_2 #q_2_n').val();
		if($(this).is(':checked') == true){
			r2s_hide(3);
			$(a+'#result #group').html('C<sub>'+n+'v</sub>');
		}
		else{
			r2s_show();
			$(a+'#result #group').html('C<sub>'+n+'</sub>');
		}
	});
	$(a+'#r_2_4 #q_2_4').click(function(){
		n = $(a+'#r_2 #q_2_n').val();
		if($(this).is(':checked') == true){
			$(a+'#result #group').html('S<sub>'+(n * 2)+'</sub>');
		}
		else{
			$(a+'#result #group').html('C<sub>'+n+'</sub>');
		}
	});
	$(a+'#r_2_1_1 #q_2_1_1').click(function(){
		n = $(a+'#r_2 #q_2_n').val();
		if($(this).is(':checked') == true){
			$(a+'#r_2_1_2 #q_2_1_2').prop('checked', false);
			$(a+'#r_2_1_2').hide();
			$(a+'#result #group').html('D<sub>'+n+'h</sub>');
		}
		else{
			$(a+'#r_2_1_2').show();
			$(a+'#result #group').html('D<sub>'+n+'</sub>');
		}
	});
	$(a+'#r_2_1_2 #q_2_1_2').click(function(){
		n = $(a+'#r_2 #q_2_n').val();
		if($(this).is(':checked') == true){
			$(a+'#r_2_1_1 #q_2_1_1').prop('checked', false);
			$(a+'#r_2_1_1').hide();
			$(a+'#result #group').html('D<sub>'+n+'d</sub>');
		}
		else{
			$(a+'#r_2_1_1').show();
			$(a+'#result #group').html('D<sub>'+n+'</sub>');
		}
	});
	$(a+'#r_3 #q_3').click(function(){
		if($(this).is(':checked') == true){
			m_hide(3);
			$(a+'#result #group').html('C<sub>s</sub>');
		}
		else{
			m_show();
			$(a+'#result #group').html('C<sub>1</sub>');
		}
	});
	$(a+'#r_4 #q_4').click(function(){
		if($(this).is(':checked') == true){
			m_hide(4);
			$(a+'#result #group').html('C<sub>i</sub>');
		}
		else{
			m_show();
			$(a+'#result #group').html('C<sub>1</sub>');
		}
	});
});
function m_hide(i){
	$.each(m_,function(key,v){
		if(key != i){
			v[1].prop('checked', false);
			v[0].hide();
		}
	});
}
function m_show(){
	$.each(m_,function(key,v){
		v[0].show();
	});
}
function r2_hide(i){
	$.each(r2_,function(key,v){
		if(key < 2){
			v[1].prop('checked', false);
			v[1].hide();
		}
		else{
			v[1].prop('checked', false);
			v[0].hide();
		}
	});
}
function r2_show(){
	$.each(r2_,function(key,v){
		if(key < 2){
			v[1].show();
		}
		else{
			v[0].show();
		}
	});
}
function r2s_hide(i){
	$.each(r2_,function(key,v){
		if(key > (i + 1)){
			r2_[key][1].prop('checked', false);
			r2_[key][0].hide();
		}
	});
}
function r2s_show(){
	$.each(r2_,function(key,v){
		v[0].show();
	});
}
function r2s1_hide(i){
	$.each(r2_1,function(key,v){
		if(key != i){
			v[1].prop('checked', false);
			v[0].hide();
		}
	});
}
function r2s1_show(){
	$.each(r2_1,function(key,v){
		v[0].show();
	});
}