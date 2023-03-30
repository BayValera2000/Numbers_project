#include <dos.h>
using namespace std;
void setup() {
  Serial. begin(9600);
  Serial.print("введите 0 лили любое положительное число");
}

void loop() {
  long chi = Serial.parseInt();
  if (chi > -1) {
    Serial.println("десятичная система"); Serial.print(chi);
    Sleep(1000);
    Serial.println("DEC="); Serial.print(chi, DEC);
    delay(1000);
    Serial.println("OCT="); Serial.print(chi, OCT);
    delay(1000);
    Serial.println("HEX="); Serial.print(chi, HEX);
    delay(1000);
    Serial.println("OCT="); Serial.print(chi, OCT);
    delay(1000);
    Serial.println("BIN="); Serial.print(chi, BIN);
    delay(5000);
  } else {
    Serial.println("ошибка пере запустите систему");
  }
}