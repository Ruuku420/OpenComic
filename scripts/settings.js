function start()
{
	events.events();
}

function setMaxMargin(value, save = false)
{
	if(save) storage.updateVar('config', 'readingMaxMargin', value);
}

function setGlobalZoom(value)
{
	storage.updateVar('config', 'readingGlobalZoom', value);
}

function setShowFullPathLibrary(value)
{
	storage.updateVar('config', 'showFullPathLibrary', value);
}

function setShowFullPathOpened(value)
{
	storage.updateVar('config', 'showFullPathOpened', value);
}

module.exports = {
	start: start,
	setMaxMargin: setMaxMargin,
	setGlobalZoom: setGlobalZoom,
	setShowFullPathLibrary: setShowFullPathLibrary,
	setShowFullPathOpened: setShowFullPathOpened,
};