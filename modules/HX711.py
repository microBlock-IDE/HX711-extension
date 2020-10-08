from machine import Pin

__old = 0

def raw(sck_pin, dio_pin):
    global __old

    sck = Pin(sck_pin, Pin.OUT).value
    sck(0)

    dio = Pin(dio_pin, Pin.IN).value
    if dio() == 0:
        data = 0
        for i in range(24):
            sck(1)
            data = (data | dio()) << 1
            sck(0)
        for i in range(1):
            sck(1)
            sck(0)
        __old = data
        return data
    return __old
