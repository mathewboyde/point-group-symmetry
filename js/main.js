$(document).ready(function(){
	const prep_text = "Group: ";
	$("#q0").click(function(){
		if($(this).is(':checked')) {
			update_result("#r0, #r0_1", "C<sub>&#x221e;v</sub>");
		} else {
			main_reset();
		}
	});
	$("#q0_1").click(function(){
		if($(this).is(':checked')) {
			update_result("#r0, #r0_1", "D<sub>&#x221e;h</sub>");
		} else {
			update_result("#r0, #r0_1", "C<sub>&#x221e;v</sub>");
		}
	});
	$("#q1").click(function(){
		if($(this).is(':checked')) {
			update_result("#r1, #r1_1", "T<sub>d</sub>");
		} else {
			main_reset();
		}
	});
	$("#q1_1").click(function(){
		$("#q1_1_1").prop("checked", false);
		if($(this).is(':checked')) {
			update_result("#r1, #r1_1, #r1_1_1", "O<sub>h</sub>");
		} else {
			update_result("#r1, #r1_1", "T<sub>d</sub>");
		}
	});
	$("#q1_1_1").click(function(){
		if($(this).is(':checked')) {
			update_result("#r1, #r1_1, #r1_1_1", "I<sub>h</sub>");
		} else {
			update_result("#r1, #r1_1, #r1_1_1", "O<sub>h</sub>");
		}
	});
	$("#q2").click(function(){
		if($(this).is(':checked')) {
			update_result("#r2, #r2_1, #r2_2, #r2_3, #r2_4, #r2_5", "C<sub>2</sub>");
		} else {
			main_reset();
		}
	});
	$("#q2_1").change(function(){
		update_axis($(this).val());
	});
	$("#q2_2").click(function(){
		$("#q2_2_1, #q2_2_2, #q2_3, #q2_4, #q2_5").prop("checked", false);
		if($(this).is(':checked')) {
			update_result("#r2, #r2_1, #r2_2, #r2_2_1, #r2_2_2", "D<sub>" + $("#q2_1").val() + "</sub>");
		} else {
			update_result("#r2, #r2_1, #r2_2, #r2_3, #r2_4, #r2_5", "C<sub>" + $("#q2_1").val() + "</sub>");
		}
	});
	$("#q2_2_1").click(function(){
		$("#q2_2_2").prop("checked", false);
		if($(this).is(':checked')) {
			update_result("#r2, #r2_1, #r2_2, #r2_2_1", "D<sub>" + $("#q2_1").val() + "h</sub>");
		} else {
			update_result("#r2, #r2_1, #r2_2, #r2_2_1, #r2_2_2", "D<sub>" + $("#q2_1").val() + "</sub>");
		}
	});
	$("#q2_2_2").click(function(){
		$("#q2_2_1").prop("checked", false);
		if($(this).is(':checked')) {
			update_result("#r2, #r2_1, #r2_2, #r2_2_2", "D<sub>" + $("#q2_1").val() + "d</sub>");
		} else {
			update_result("#r2, #r2_1, #r2_2, #r2_2_1, #r2_2_2", "D<sub>" + $("#q2_1").val() + "</sub>");
		}
	});
	$("#q2_3").click(function(){
		$("#q2_2, #q2_2_1, #q2_2_2, #q2_4, #q2_5").prop("checked", false);
		if($(this).is(':checked')) {
			update_result("#r2, #r2_1, #r2_3", "C<sub>" + $("#q2_1").val() + "h</sub>");
		} else {
			update_result("#r2, #r2_1, #r2_2, #r2_3, #r2_4, #r2_5", "C<sub>" + $("#q2_1").val() + "</sub>");
		}
	});
	$("#q2_4").click(function(){
		$("#q2_2, #q2_2_1, #q2_2_2, #q2_3, #q2_5").prop("checked", false);
		if($(this).is(':checked')) {
			update_result("#r2, #r2_1, #r2_4", "C<sub>" + $("#q2_1").val() + "v</sub>");
		} else {
			update_result("#r2, #r2_1, #r2_2, #r2_3, #r2_4, #r2_5", "C<sub>" + $("#q2_1").val() + "</sub>");
		}
	});
	$("#q2_5").click(function(){
		$("#q2_2, #q2_2_1, #q2_2_2, #q2_3, #q2_4").prop("checked", false);
		if($(this).is(':checked')) {
			update_result("#r2, #r2_1, #r2_5", "S<sub>" + $("#q2_1").val() + "</sub>");
		} else {
			update_result("#r2, #r2_1, #r2_2, #r2_3, #r2_4, #r2_5", "C<sub>" + $("#q2_1").val() + "</sub>");
		}
	});
	$("#q3").click(function(){
		if($(this).is(':checked')) {
			update_result("#r3", "C<sub>s</sub>");
		} else {
			main_reset();
		}
	});
	$("#q4").click(function(){
		if($(this).is(':checked')) {
			update_result("#r4", "C<sub>i</sub>");
		} else {
			main_reset();
		}
	});

	function update_axis(val) {
		t = $("#final_result").text();
		num = t.match(/\d+/)[0];
		add_str = "";
		axis_val = $("#q2_1").val();
		console.log(num);
		if($("#q2_5").is(":checked")){
			axis_val = axis_val * 2;
		}
		if($("#q2_2_1").is(":checked")){ add_str = "h"; }
		if($("#q2_2_2").is(":checked")){ add_str = "d"; }
		if($("#q2_3").is(":checked")){ add_str = "h"; }
		if($("#q2_4").is(":checked")){ add_str = "v"; }
		txt = t.replace(num, "<sub>" + axis_val + add_str + "</sub>");
		if(!!add_str) {
			txt = txt.slice(0, -1);
		}
		console.log(txt);
		$("#final_result").html(txt);
	}
	function update_result(s, t) {
		$("[id^='r']").hide();
		$(s).show();
		if($("#q2_5").is(":checked")){
			axis_val = $("#q2_1").val();
			num = t.match(/\d+/)[0];
			t = t.replace(num, axis_val * 2);
		}
		$("#final_result").html(prep_text + t);
	}
	function main_reset() {
		$("[id^='r']").each(function(key, value){
			if(value.id.split("_").length > 1) {
				$("#" + value.id).hide();
				$("#" + value.id.replace("r", "q")).prop("checked",false);
			} else {
				$("#" + value.id).show();
			}
		});
		$("#q2_1").val("2");
		update_result("#r0, #r1, #r2, #r3, #r4", "C<sub>1</sub>");
	}
});