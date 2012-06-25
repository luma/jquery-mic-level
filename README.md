jquery-mic-level
================

A dirt-simple Mic Level jQuery widget


## Installation

Embed the script *after* the jQuery library:

    <script src="/path/to/jquery-mic_level.js"></script>

## Usage


Add a Mic Level control in each element with the class 'mic-level':

     $('.mic-level').micLevel();

Create a Mic Level control, with specific min, max, and a starting value:

     $('.mic-level').micLevel({
         min: 10,
         max: 100,
         value: 50
     });

Update the current value:

    $('.mic-level').micLevel('updateValue', 60);


*Note:* The widget is pretty easy to style, but there are example styles in example.css if you'd like somewhere to start.


## Options

    min: 0

Default: 0

The minimum value that the widget will include.

    max: 100

Default: 100

The maximum value that the widget will include.

    value: 50

Default: 50

The current value that the widget is displaying.


## Changelog

## Development

- You can find the source at [GitHub](https://github.com/luma/jquery-mic-level)
- Please report any issues, questions, or feature requestson [GitHub Issues](https://github.com/luma/jquery-mic-level/issues)

Pull requests are very welcome! Make sure your patches are well tested. Please create a topic branch for every separate change you make.

## Authors

[Rolly Fordham](https://github.com/luma)
