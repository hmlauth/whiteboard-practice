function humanReadable(seconds) {
    // TODO
    // console.log(new Date().toISOString())
    console.log(new Date(seconds*1000))
    console.log(new Date(seconds * 1000).toISOString().substr(11, 8));
    return new Date(seconds * 1000).toISOString().substr(11, 8);

  }

humanReadable(0) // '00:00:00'
humanReadable(5) // '00:00:05'
humanReadable(60) // '00:01:00'
humanReadable(86399) // '23:59:59'
humanReadable(359999) // '99:59:59'