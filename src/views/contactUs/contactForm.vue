
<template>
  <div class="contianer-fluid contaict-section-1">
    <form>
      <div class="form-line">
        <label for="name" class="input-name">{{$t('message.aboutus.line1.fieldName')}}</label>
        <input
          name="name"
          type="text"
          v-model="subParams.name"
          :placeholder="$t('message.aboutus.line1.placeholder')"
        >
      </div>
      <div class="form-line">
        <label for="email" class="input-name">{{$t('message.aboutus.line2.fieldName')}}</label>
        <input
          name="email"
          type="text"
          pattern="^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$"
          v-model="subParams.email"
          :placeholder="$t('message.aboutus.line2.placeholder')"
        >
      </div>
      <div class="form-line">
        <label for="subject" class="input-name">{{$t('message.aboutus.line3.fieldName')}}</label>
        <input
          name="subject"
          type="text"
          v-model="subParams.subject"
          :placeholder="$t('message.aboutus.line3.placeholder')"
        >
      </div>
      <div class="form-line message">
        <!-- <label for="message" class="input-name">Message</label> -->
        <textarea
          name="message"
          v-model="subParams.message"
          :placeholder="$t('message.aboutus.line4.placeholder')"
        ></textarea>
      </div>
    </form>
    <div class="contact-msg">
      <div class="contact-wrap">
        <div class="contact-item">
          <p>
            <span class="name">{{$t('message.aboutus.line5')[0]}}</span>
            <span class="value">
              <a href="mailto:atlas@polyu.edu.hk">atlas@polyu.edu.hk</a>
            </span>
          </p>
          <p>
            <span class="name">{{$t('message.aboutus.line5')[1]}}</span>
            <span class="value">852-27664655</span>
          </p>
        </div>

        <div class="contact-item">
          <p>
            <span class="name empty"></span>
            <span class="value">
              <a href="mailto:atlas@polyu.edu.hk">lswong@polyu.edu.hk</a>
            </span>
          </p>
          <p>
            <span class="name empty"></span>
            <span class="value">852-34008959</span>
          </p>
        </div>
      </div>

      <button @click="saveMsg">{{$t('message.aboutus.line5')[2]}}</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  components: {},
  mounted() {},
  data() {
    return {
      subParams: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    };
  },
  methods: {
    async saveMsg() {
      let isMsgSaved = await axios.post(
        "http://158.132.186.221:7002/atlasweb/savemsg",
        this.subParams
      );

      isMsgSaved.data
        ? this.$message({
            message: "Leaving message succeed",
            type: "success"
          })
        : this.$message({
            message: "Leaving message faild. Please send us email.",
            type: "errow"
          });

      if (isMsgSaved.data)
        this.subParams = { name: "", email: "", subject: "", message: "" };
    }
  }
};
</script>

<style lang="less" scoped>
.contaict-section-1 {
  width: 1200px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  form {
    width: 100%;
    .form-line {
      display: flex;
      width: 100%;
      margin: 15px 0;
      label {
        padding: 10px 30px;
        width: 120px;
        box-sizing: border-box;
        background-color: #314a7f;
        color: #fff;
        border-radius: 30px;
        margin-right: 30px;
        font-size: 1.4rem;
      }

      input {
        // outline: none;
        flex: 1;
        text-indent: 0.5em;
        font-size: 1.4rem;
      }
      input:invalid {
        outline: red;
      }
    }
  }

  .form-line.message {
    flex-direction: column;
    justify-content: flex-start;

    textarea {
      margin: 15px 0;
      padding: 15px;
      height: 200px;
      max-height: 240px;
      resize: none;
      border: 1px solid #ddd;
      font-size: 1.4rem;
    }
  }

  .contact-msg {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .contact-wrap {
      display: flex;
      font-size: 1.2rem;
      .name {
        display: inline-block;
        width: 4.5rem;
        text-align: left;
        font-weight: 600;
      }
      .empty {
        width: 0;
      }
      .value {
        display: inline-block;
        width: 12rem;
        text-align: left;
      }
    }

    button {
      width: 120px;
      background-color: #314a7f;
      color: #fff;
      height: 40px;
      border-radius: 30px;
      cursor: pointer;
      outline: none;
      font-size: 1.4rem;
      font-weight: 600;
    }
    button:hover {
      background-color: #517bd8;
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .contaict-section-1 {
    width: 90%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    form {
      width: 100%;
      .form-line {
        display: flex;
        width: 100%;
        margin: 15px 0;
        label {
          padding: 10px 30px;
          width: 120px;
          box-sizing: border-box;
          background-color: #314a7f;
          color: #fff;
          border-radius: 0.4rem;
          margin-right: 1.5rem;
          font-size: 1.4rem;
        }
        input {
          // outline: none;
          flex: 1;
          text-indent: 0.5em;
          border: 1px solid #ddd;
          border-radius: 0.4rem;
        }
        input:invalid {
          outline: red;
        }
      }
    }

    .form-line.message {
      flex-direction: column;
      justify-content: flex-start;

      textarea {
        margin-top: 1.5rem;
        padding: 1.5rem;
        height: 12rem;
        resize: none;
        border: 1px solid #ddd;
        border-radius: 0.4rem;
      }
    }

    .contact-msg {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        width: 12rem;
        background-color: #314a7f;
        color: #fff;
        height: 4rem;
        border-radius: 0.4rem;
        cursor: pointer;
        outline: none;
        font-size: 1.4rem;
        font-weight: 600;
      }
      button:hover {
        background-color: #517bd8;
      }
    }
  }
}
@media only screen and (max-width: 48em) {
  .contaict-section-1 {
    display: block;
    width: 90%;
    flex-direction: column;
    background-color: #fff;

    form {
      width: 100%;
      display: flex;
      flex-direction: column;

      .form-line {
        display: flex;
        width: 100%;
        margin: 0.5rem 0;
        label {
          width: 10rem;
          box-sizing: border-box;
          background-color: #314a7f;
          color: #fff;
          border-radius: 0.4rem;
          margin-right: 1rem;
          font-size: 1.2rem;
        }
        input {
          flex: 1;
          text-indent: 0.5em;
          border: 1px solid #ddd;
          border-radius: 0.4rem;
          font-size: 1.2rem;
        }
        input:invalid {
          outline: red;
        }
      }
    }

    .form-line.message {
      textarea {
        margin: 0.5rem 0;
        padding: 1.5rem;
        height: 10rem;
        border: 1px solid #ddd;
        border-radius: 0.4rem;

        font-size: 1.2rem;
        resize: none;
      }
    }

    .contact-msg {
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-between;
      align-items: flex-end;

      width: 100%;
      overflow: auto;

      .contact-wrap {
        width: 100%;
        margin: 0.5rem 0;
        display: flex;
      }

      p {
        text-align: left;
        padding: 0;
        span {
          margin-right: 15px;
          font-size: 1.2rem !important;
        }
        a {
          text-decoration: none;
        }
      }
      button {
        color: #fff;
        margin-bottom: 1.5rem;
        border: 0;
        border-radius: 0.4rem;
        width: auto;
        height: 3.6rem;

        font-size: 1.4rem;
        font-weight: 600;
        background-color: #314a7f;

        cursor: pointer;
      }
      button:hover {
        background-color: #517bd8;
      }
    }
  }
}
</style>
