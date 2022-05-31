package com.ibm.tfservtest.tfcaller;

/*
 * (C) Copyright IBM Corp. 2021.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

public class Tfcaller {
    public static int rc = 0; // exit return code 
    public static final String testTensor = "[[1.0,2.0,3.0,4.0,5.0]]";
    public static final String INPUTREQS = "required arguments are: host port modelpath payload";
    public static final String INPUTEX = "example: tfcaller 127.0.0.1 8501 /v1/models/simplemm 1.0,2.0,3.0,4.0,5.0";

    /**
     * Our goal here is to provide a simple z/OS Java appliction that can interface with TensorFlow serving. 
     * 
     * This is intended to demonstrate the use alongside TensorFlow Serving, hosted in a zCX or Linux on Z instance - with 
     * the simplemm model found in the project repository.
     * 
     * This uses standard apache http classes to issue rest calls. There may be better approaches to consider depending
     * on your application needs and available products. This includes numerous open-source REST java packages, 
     * built-in capabilities of CICS and/or Websphere Liberty, and IBM products like z/OS Connect EE. 
     * 
     * simplemm model does the following:
     *    1. takes an input tensor of shape [1,5] 
     *    2. matrix multiply against a weight tensor of shape [5,1] with weights defined as 1.0
     *    3. result is a tensor of shape [1,1]
     * 
     * For example, an input of [1.0,2.0,3.0,4.0,5.0] is multipled against [[1.0],[1.0],[1.0],[1.0],[1.0]]
     * will produce a result of [[15.0]]
     * 
     * @param args
     */
    public static void main(String[] args) {
        System.out.println("Starting TFServing Simple Interface Example "); 
        
        if (args.length != 4) {
            System.out.println(INPUTREQS); 
            System.out.println(INPUTEX); 
            return;
        }

        Tfcaller myapp = new Tfcaller();
        myapp.processRequest(args[0],args[1],args[2],args[3]);
        
    }

    private void processRequest(String host, String port, String modelpath, String payload) {

        //session tf = new session("9.47.86.127", "8507", "/v1/models/simplemm");
        Session tf = new Session(host, port, modelpath);
        String predict = tf.predict(payload);
        System.out.println(predict);
        System.out.println("Processing complete!"); 
    }
}
