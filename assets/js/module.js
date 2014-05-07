
$(document).ready(function() {
	handleButton($('#et_save'),function() {
	});
	
	handleButton($('#et_cancel'),function(e) {
		if (m = window.location.href.match(/\/update\/[0-9]+/)) {
			window.location.href = window.location.href.replace('/update/','/view/');
		} else {
			window.location.href = baseUrl+'/patient/episodes/'+et_patient_id;
		}
		e.preventDefault();
	});

	handleButton($('#et_deleteevent'));

	handleButton($('#et_canceldelete'));

	handleButton($('#et_print'),function(e) {
		printIFrameUrl(OE_print_url, null);
		enableButtons();
		e.preventDefault();
	});

	$('select.populate_textarea').unbind('change').change(function() {
		if ($(this).val() != '') {
			var cLass = $(this).parent().parent().parent().attr('class').match(/Element.*/);
			var el = $('#'+cLass+'_'+$(this).attr('id'));
			var currentText = el.text();
			var newText = $(this).children('option:selected').text();

			if (currentText.length == 0) {
				el.text(ucfirst(newText));
			} else {
				el.text(currentText+', '+newText);
			}
		}
	});

	$('.time-now').click(function(e) {
		e.preventDefault();

		var d = new Date;

		var h = d.getHours();
		var m = d.getMinutes();

		if (h <10) {
			h = '0'+h;
		}
		if (m <10) {
			m = '0'+m;
		}

		$('input[type="text"][id$="'+$(this).data('target')+'"]').val(h+':'+m);
	});

	$('#Element_OphNuIntraoperative_SurgicalCounts_count_discrepancies').click(function() {
		if ($(this).is(':checked')) {
			$('#div_Element_OphNuIntraoperative_SurgicalCounts_surgeon_notified').show();
			$('#div_Element_OphNuIntraoperative_SurgicalCounts_comments').show();
		} else {
			$('#div_Element_OphNuIntraoperative_SurgicalCounts_surgeon_notified').hide();
			$('#div_Element_OphNuIntraoperative_SurgicalCounts_comments').hide();
			$('#Element_OphNuIntraoperative_SurgicalCounts_surgeon_notified').removeAttr('checked');
			$('#div_Element_OphNuIntraoperative_SurgicalCounts_comments').val('');
		}
	});
});

function ucfirst(str) { str += ''; var f = str.charAt(0).toUpperCase(); return f + str.substr(1); }

function eDparameterListener(_drawing) {
	if (_drawing.selectedDoodle != null) {
		// handle event
	}
}
