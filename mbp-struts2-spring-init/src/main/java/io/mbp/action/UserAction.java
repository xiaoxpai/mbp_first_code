package io.mbp.action;

 
import io.mbp.bean.MessageStore; 
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.interceptor.ParameterNameAware;
import org.apache.struts2.interceptor.SessionAware;

import java.util.Map;

/**
 *  
 * @struts2 version 2.3.31
 */
public class UserAction extends ActionSupport implements SessionAware, ParameterNameAware {

    private static final long serialVersionUID = 1L;

    /**
     * The model class that stores the message
     * to display in the view.
     */
    private MessageStore messageStore;

    private Map<String, Object> userSession;

    private static final String HELLO_COUNT = "helloCount";

    private String userName;

    public MessageStore getMessageStore() {
        return messageStore;
    }

    public void setMessageStore(MessageStore messageStore) {
        this.messageStore = messageStore;
    }



    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }


    public String queryUser() {
        messageStore = new MessageStore();
        //Action included a query string parameter of userName
        //or a form field with name of userName
        if (userName != null) {
            messageStore.setMessage(messageStore.getMessage() + " " + userName);

        }
        increaseHelloCount();
        return SUCCESS;
    }

    /**
     *@TODO 增加存储在用户的HELLO COUNT的值。
     */
    private void increaseHelloCount() {
        Integer helloCount = (Integer) userSession.get(HELLO_COUNT);

        if (helloCount == null) {
            helloCount = 1;
        } else {
            helloCount++;
        }
        userSession.put(HELLO_COUNT, helloCount);
    }


    public boolean acceptableParameterName(String parameterName) {
        boolean allowedParameterName = true ;

        if ( parameterName.contains("session")  || parameterName.contains("request") ) {

            allowedParameterName = false ;

        }
        return allowedParameterName;
    }

    public void setSession(Map<String, Object> session) {
        userSession = session ;
    }
}
