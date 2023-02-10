//add tooltip by piggybacking off of javascript/hints.js ...
//titles["Add/Remove..."] = "[Config Presets] Add or remove a preset"
//...or do it our more precise way:
onUiUpdate(function() {
	//set tooltips
	gradioApp().querySelectorAll("#config_presets_open_config_file_button").forEach(el => el.setAttribute("title", "Open the config file for manual editing if you want to make changes that way, requires Gradio restart after editing. The txt2img and img2img tabs have separate config files."))
	gradioApp().querySelectorAll("#config_preset_save_textbox").forEach(el => el.setAttribute("title", "The label that will be displayed in the dropdown to the left"))
	gradioApp().querySelectorAll("#config_preset_save_button").forEach(el => el.setAttribute("title", "Saves current settings with the new preset name and restarts the UI. Overwrites existing preset. This will save: Sampler, Steps, Width/Height, Hires. fix, Upscale by, Denoising strength, Batch size, CFG Scale."))
	gradioApp().querySelectorAll("#config_preset_add_button").forEach(el => el.setAttribute("title", "[Config Presets] Create or delete a preset"))
	gradioApp().querySelectorAll("#config_preset_cancel_save_button").forEach(el => el.setAttribute("title", "Go back"))
	gradioApp().querySelectorAll("#config_preset_trash_button").forEach(el => el.setAttribute("title", "Permanently delete selected preset"))
})

function config_preset_settings_restart_gradio() {
	console.log('[Config-Presets] Restarting to apply new config preset...')
	setTimeout(function() {
		gradioApp().getElementById("settings_restart_gradio").click()
	}, 1000)
}