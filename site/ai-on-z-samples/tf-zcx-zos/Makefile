JFLAGS = -g
JC = javac
SRC_DIR = ./com/ibm/tfservtest/tfcaller
MODEL_JAR = ".:./commons-logging-1.1.3.jar:./httpclient-4.5.13.jar:./httpcore-4.4.14.jar:./javax.json-1.0.jar"
MODELCLASSPATH := -classpath $(MODEL_JAR):.

.SUFFIXES: .java .class
.java.class:
	$(JC) $(JFLAGS) $(OUTPUT) $(MODELCLASSPATH) $*.java

CLASSES = \
	$(SRC_DIR)/Session.java \
	$(SRC_DIR)/Tfcaller.java 

default: classes

classes: $(CLASSES:.java=.class)

run: 
	java $(MODELCLASSPATH) com.ibm.tfservtest.tfcaller.Tfcaller $(HOSTIP) $(PORT) $(MODEL_DIR) $(PAYLOAD)

clean:
	$(RM) ./com/ibm/tfservtest/tfcaller/*.class
