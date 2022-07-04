package io.mbp.bean;

import lombok.Data;

import java.io.Serializable;

@Data
public class User implements Serializable {
    private String email;
    private String passwd;

}
