#!/bin/bash

# Wait for the emulator to boot
adb wait-for-device

# Wait until the emulator is fully booted
until adb shell getprop sys.boot_completed | grep -m 1 '1'; do
    sleep 1
done

# Unlock the device
adb shell input keyevent 82
