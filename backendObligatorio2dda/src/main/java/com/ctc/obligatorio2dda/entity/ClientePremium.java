package com.ctc.obligatorio2dda.entity;

public class ClientePremium extends Cliente{
    public ClientePremium() {}

    public ClientePremium(String pCI, String pNombre, String pApellido, String pEmail){
        super(pCI, pNombre, pApellido, pEmail);
    }

    public static Double precioDescuento(Double pPrecio){
        return pPrecio * 0.80;
    }
}
